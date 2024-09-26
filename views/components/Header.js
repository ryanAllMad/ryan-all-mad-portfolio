import { useState, useEffect } from 'react';
import Contact from './Contact.js';
import ShowSkills from './ShowSkills.js';

const Header = () => {
	const [showSkills, setShowSkills] = useState(false);
	const [animateClass, setAnimateClass] = useState('');
	const handleShowSkills = () => {
		setShowSkills((prev) => (!prev ? true : false));
		setAnimateClass('drawer');
	};
	const handleKeyDown = (e) => {
		if (e.code !== 'Enter' && e.code !== 'Space') {
			return;
		}
		if (e.code !== 'Tab') {
			e.preventDefault();
		}
		handleShowSkills();
	};
	useEffect(() => {
		window.addEventListener('scroll', () => setShowSkills(false));
	}, []);

	return (
		<>
			<header>
				<div
					aria-expanded={showSkills}
					aria-controls='skills-menu'
					tabIndex={0}
					aria-label='see skills'
					onKeyDown={(e) => handleKeyDown(e)}
					role='button'
					onClick={handleShowSkills}
					className='logo'
				>
					{!showSkills && <span className='arrow'>&#9661;</span>}
				</div>

				<Contact />
			</header>
			<div
				className='skills-container'
				style={{ position: 'relative' }}
			>
				{showSkills && (
					<ShowSkills
						classes={animateClass}
						onClick={() => {
							setShowSkills(false);
							setAnimateClass('drawer-close');
						}}
					/>
				)}
			</div>
		</>
	);
};

export default Header;
