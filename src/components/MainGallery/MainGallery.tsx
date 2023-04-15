import React, { useState } from "react"
import { TransitionPhoto } from "../MainPhoto/TransitionPhoto"
import { Navigation } from "../Navigation/Navigation"
import { PreviewPhoto } from "../PreviewGallery/PreviewPhoto"
import { Photo } from "../Types/Types"
import s from "./MainGallery.module.scss"

interface Props {
	photos: Photo[]
}

export const MainGallery: React.FC<Props> = ({ photos }) => {
	const [indexCurrentPhoto, setIndexCurrentPhoto] = useState(0)
	const currentPhoto = photos[indexCurrentPhoto]
	const prevPhoto = photos[indexCurrentPhoto - 1]
	const nextPhoto = photos[indexCurrentPhoto + 1]

	if (!photos.length) {
		return null
	}

	return (
		<div className={s.mainGallery}>
			<div className={s.mainGalleryContainer}>
				<TransitionPhoto
					// prevPhoto={prevPhoto}
					// currentPhoto={currentPhoto}
					// nextPhoto={nextPhoto}
					// className={s.galleryMainPhoto}
					photos={photos}
					indexCurrentPhoto={indexCurrentPhoto}
				/>
				<Navigation
					className={s.navigationGallery}
					disabledPrev={!prevPhoto}
					disabledNext={!nextPhoto}
					onPrevClick={() => { setIndexCurrentPhoto(indexCurrentPhoto - 1) }}
					onNextClick={() => { setIndexCurrentPhoto(indexCurrentPhoto + 1) }}
				/>
			</div>
			<PreviewPhoto
				className={s.previewPhotoGallery}
				photos={photos}
				activePhotoIndex={indexCurrentPhoto}
				setNewPhoto={setIndexCurrentPhoto}
			/>
		</div>
	)
}