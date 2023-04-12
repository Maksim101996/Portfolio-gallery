import React from "react"
import { CommonClassProps } from "../Types/Types"
import cl from "classnames"
import s from "./Navigation.module.scss"

interface Props extends CommonClassProps {
	disabledPrev: boolean
	disabledNext: boolean
	onPrevClick: () => void
	onNextClick: () => void
}
export const Navigation: React.FC<Props> = ({ disabledPrev, disabledNext, onPrevClick, onNextClick, className }) => {

	return (
		<div className={cl(s.navigation, className)}>
			<button className={cl(s.navigationButton, s.navigationButtonLeft)} disabled={disabledPrev} onClick={onPrevClick}>previev photo</button>
			<button className={cl(s.navigationButton, s.navigationButtonRight)} disabled={disabledNext} onClick={onNextClick}>next photo</button>
		</div>
	)
}