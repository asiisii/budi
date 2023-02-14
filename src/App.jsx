import Heart from './Heart'
import TypingAnimation from './TypingAnimation'
import bgImg from './assets/background.png'

function App() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				width: '100vw',
				flexDirection: 'column',
				fontSize: '20px',
			}}
		>
			<Heart />
			<TypingAnimation />
		</div>
	)
}

export default App

// style={{
//         backgroundImage: `url(${'path/to/your/background/image.jpg'})`,
//         height: '100vh',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat'
//       }}
