import React, { useState, useEffect } from 'react'

const TypingAnimation = () => {
	const [typedText, setTypedText] = useState('')
	const text = import.meta.env.VITE_MESSAGE

	useEffect(() => {
		let index = 0
		const type = () => {
			setTypedText(text.slice(0, index))
			index++
			if (index <= text.length) {
				setTimeout(type, 20)
			}
		}
		type()
	}, [])

	return (
		<div style={{ whiteSpace: 'pre-wrap' }}
      data-aos='fade-right'
    >
			{typedText}
			{/* <span
				style={{
					borderRight: '0.15em solid #333',
					animation: 'blink 1s step-end infinite',
					// marginLeft: '5px',
					textAlign: 'center',
				}}
			/> */}
		</div>
	)
}

export default TypingAnimation
