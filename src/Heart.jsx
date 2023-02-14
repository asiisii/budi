import React, { useState, useEffect } from 'react'

const Heart = () => {
	const [pathLength, setPathLength] = useState(0)
	const [fill, setFill] = useState(false)
	const [displayText, setDisplayText] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const text = 'I love you more'
	const plus1 = '+1'

	useEffect(() => {
		const path = document.querySelector('#heart-path')
		setPathLength(path.getTotalLength())
		path.style.strokeDasharray = `${pathLength} ${pathLength}`
		path.style.strokeDashoffset = pathLength

		const animate = () => {
			path.style.transition = 'stroke-dashoffset 1s ease-in-out'
			path.style.strokeDashoffset = '0'
			setFill(true)
			path.addEventListener('transitionend', () => {
				setDisplayText(true)
				setTimeout(() => {
					setIsVisible(true)
				}, 10000)
			})
		}

		setTimeout(animate, 2000)
	}, [])

	return (
		<svg viewBox='0 0 100 100' style={{ height: '400px', width: '300px' }}>
			<path
				id='heart-path'
				d='M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 Z'
				style={{
					transition: 'stroke-dashoffset 1s ease-in-out',
					strokeDasharray: `${pathLength} ${pathLength}`,
					strokeDashoffset: fill ? '0' : pathLength,
					fill: displayText ? 'rgb(255, 0, 0, 0.5)' : 'transparent',
					stroke: fill ? 'currentColor' : 'none',
				}}
			/>
			{displayText && (
				<text
					x='50'
					y='40'
					style={{
						fill: 'white',
						fontSize: '8px',
						textAnchor: 'middle',
					}}
					className='text'
				>
					{text}
				</text>
			)}
			{isVisible && (
				<text
					x='45'
					y='75'
					style={{
						fill: 'white',
						fontSize: '35px',
						textAnchor: 'middle',
					}}
				>
					{plus1}
				</text>
			)}
		</svg>
	)
}

export default Heart
