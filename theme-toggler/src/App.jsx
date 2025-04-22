import './App.css'

import { ThemeProvider } from './ThemeContext'
import Header from './Header'
import Main from './Main'

function App() {
	return (
		<>
			<ThemeProvider>
				<Header />
				<Main />
				<div>Application will be here.</div>
			</ThemeProvider>
		</>
	)
}

export default App
