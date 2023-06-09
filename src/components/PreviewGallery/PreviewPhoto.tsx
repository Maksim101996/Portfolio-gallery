import React, { useEffect, useMemo, useRef } from "react"
import { CommonClassProps, Photo } from "../Types/Types"
import s from "./PreviewPhoto.module.scss"
import cl from "classnames"


interface Props extends CommonClassProps {
	photos: Photo[]
	activePhotoIndex: number
	setNewPhoto: (id: number) => void
}

export const PreviewPhoto: React.FC<Props> = ({ photos, activePhotoIndex, className, setNewPhoto }) => {

	if (!photos.length) {
		return null
	}


	const previewContainer = useRef<HTMLUListElement>(null)

	useEffect(() => {
		if (!previewContainer.current) {
			return
		}
		previewContainer.current.style.transform = `translate3d(-${activePhotoIndex * 164}px, 0, 0)`
	}, [activePhotoIndex])

	return (
		<div className={cl(s.previewPhoto, className,)}>
			{useMemo(() => (
				<ul className={s.previewPhotoTrack}
					ref={previewContainer}>
					{photos.map((photo, id) => (
						<li key={photo.id} >
							<button className={s.previewPhotoPreview} onClick={() => setNewPhoto(id)}><img src={photo.preview} alt={photo.desc} className={s.previewPhotoImage} /></button>
						</li>
					))}
				</ul>
			), [])}
			<div className={s.previewPhotoCover} >
				{activePhotoIndex + 1} / {photos.length}
			</div>
		</div>
	)
}