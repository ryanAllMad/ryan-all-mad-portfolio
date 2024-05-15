import * as React from 'react';
import Contact from './Contact.js';
import ShowSkills from './ShowSkills.js'



const Header = () => {
	const [showSkills, setShowSkills] = React.useState(false)
	const handleShowSkills = () => {
		setShowSkills((prev) => !prev ? true : false)
	}
	const handleKeyDown = (e) => {
		if (e.code !== 'Enter' && e.code !== 'Space') {
			return
		}
		if (e.code !== 'Tab') {
			e.preventDefault()
		}
		handleShowSkills()
	}
	React.useEffect(() => {
		window.addEventListener('scroll', () => setShowSkills(false))
	}, [])

	return (
		<header className='desktop-hidden'>
			<div aria-expanded={showSkills} aria-controls="skills-menu" tabIndex={0} aria-label="see skills" onKeyDown={(e) => handleKeyDown(e)} role="button" onClick={handleShowSkills} className='logo'></div>
			{showSkills && <ShowSkills onClick={() =>setShowSkills(false)} />}
			<Contact />
		</header>
	)
}

export default Header