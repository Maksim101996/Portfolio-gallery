import React, { useLayoutEffect, useMemo, useRef, useState } from "react"
import { CommonClassProps, Photo } from "../Types/Types"
import cl from "classnames"
import s from "./TransitionPhoto.module.scss"

interface Props extends CommonClassProps {
	photos: Photo[]
	indexCurrentPhoto: any
}

type RefT = React.MutableRefObject<HTMLDivElement | null>
const getPhotoByRef = (ref: RefT, index: number): HTMLElement | null =>
(
	ref.current!.querySelector(`img:nth-of-type(${index + 1})`)
)

const hidePhoto = (element: HTMLElement | null) => {
	if (!element) {
		return
	}

	element.dataset.active = "false"

	if (element.previousSibling) {
		// @ts-ignore
		element.previousSibling.dataset.active = "false"
	}
	else if (element.nextSibling) {
		// @ts-ignore
		element.nextSibling.dataset.active = "false"
	}
}

const showPhoto = (element: HTMLElement | null) => {
	if (!element) {
		return
	}
	element.dataset.active = "true"

	if (element.previousSibling) {
		// @ts-ignore
		element.previousSibling.dataset.active = "prepared"
	}

	else if (element.nextSibling) {
		// @ts-ignore
		element.nextSibling.dataset.active = "prepared"
	}
}

export const TransitionPhoto: React.FC<Props> = ({ photos, indexCurrentPhoto, className }) => {

	const [prevIndexCurrentPhoto, setPrevIndexCurrentPhoto] = useState(indexCurrentPhoto)
	const containerRef = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		if (!containerRef.current) {
			return
		}

		const activePhoto = getPhotoByRef(
			containerRef,
			prevIndexCurrentPhoto,
		)

		const nextActivePhoto = getPhotoByRef(
			containerRef,
			indexCurrentPhoto,
		)

		if (prevIndexCurrentPhoto !== indexCurrentPhoto) {
			hidePhoto(activePhoto)
			showPhoto(nextActivePhoto)
		} else {
			showPhoto(activePhoto)
		}

		setPrevIndexCurrentPhoto(indexCurrentPhoto)
	}, [indexCurrentPhoto])


	return useMemo(() => (
		<div className={cl(className, s.transitionPhoto)} ref={containerRef}>
			{photos.map((photo, id) => (<img
				key={photo.id}
				className={s.transitionPhotoImage}
				data-active={id === prevIndexCurrentPhoto}
				src={photo.src}
				alt={photo.desc}
				loading="lazy"
			/>
			))}	</div>
	), [])
}	
