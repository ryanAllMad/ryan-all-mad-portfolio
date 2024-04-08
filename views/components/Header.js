import * as React from 'react';
import Contact from './Contact.js';
import ShowSkills from './ShowSkills.js'



const Header = () => {
	const [showSkills, setShowSkills] = React.useState(false)
	const handleShowSkills = () => {
		setShowSkills((prev) => !prev ? true : false)
	}
	React.useEffect(() => {
		window.addEventListener('scroll', () => setShowSkills(false))
	}, [])

	return (
		<header className='desktop-hidden'>
			<section onClick={handleShowSkills} className='logo'></section>
			<Contact />
			{showSkills && <ShowSkills />}
		</header>
	)
}

export default Header