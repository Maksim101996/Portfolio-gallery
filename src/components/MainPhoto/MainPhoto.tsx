import React from "react"
import { CommonClassProps, Photo } from "../Types/Types"
import cl from "classnames"
import s from "./MainPhoto.module.scss"

interface Props extends CommonClassProps {
	prevPhoto?: Photo
	currentPhoto: Photo
	nextPhoto?: Photo
}


export const MainPhoto: React.FC<Props> = ({ prevPhoto, currentPhoto, nextPhoto, className }) => {

	return (
		<div className={cl(className, s.mainPhoto)}>
			{prevPhoto && <img className={cl(s.mainPhotoImage, s.mainPhotoImagePrev)} src={prevPhoto.src} alt={prevPhoto.desc} />}
			{currentPhoto && <img className={cl(s.mainPhotoImage, s.mainPhotoImageCurrent)} src={currentPhoto.src} alt={currentPhoto.desc} />}
			{nextPhoto && <img className={cl(s.mainPhotoImage, s.mainPhotoImageNext)} src={nextPhoto.src} alt={nextPhoto.desc} />}
		</div>
	)
}