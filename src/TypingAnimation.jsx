import React, { useState, useEffect } from 'react'

const TypingAnimation = () => {
	const [typedText, setTypedText] = useState('')
	const text =
		"Mero pyaro mutu, even though we are thousands of miles apart today on this special day of love, my heart beats only for you. In the past couple of years, I went through a lot of difficult situations and I don't think I would have survived them if you weren't by my side. You literally do light up my world and set the rhythm that my heart dances to. Every heartbeat reminds me of the love we share. I can't wait to be reunited with you soon and wrap you in my arms (>^.^)>! Until then, know that I love you more (+1) with each passing day. Happy Valentine's day mero mutu! <3"

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
		<div style={{ whiteSpace: 'pre-wrap' }} data-aos='fade-right'>
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
