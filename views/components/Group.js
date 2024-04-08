import * as React from 'react';
import ToProjectButtons from './ToProjectButtons.js';

const Group = (props) => {
	const { id, title, skills, projectLink, githubLink, projectTitle } = props;
	const [showOnHover, setShowOnHover] = React.useState(false);
	const [focussedClass, setFocussedClass] = React.useState('');

	const handleMouseOver = () => {
		setShowOnHover(true);
		setFocussedClass('focussed');
	};
	const handleMouseOut = () => {
		setShowOnHover(false);
		setFocussedClass('');
	};
	const handleGroupKeyDown = (e) => {
		if (e.key === 'Shift') {
			setShowOnHover(false);
			setFocussedClass('');
		}
	};
	const handleLastButtonKeyDown = (e) => {
		if (e.key === 'Tab') {
			setShowOnHover(false);
			setFocussedClass('');
		}
	};

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onFocus={handleMouseOver}
			onKeyDown={(e) => handleGroupKeyDown(e)}
			id={id}
			className={`group ${focussedClass}`}
			tabIndex={0}
		>
			{showOnHover && (
				<>
					<h2>{title}</h2>
					<p>Built with:</p>
					<ul>
						{skills.map((sk) => (
							<li key={sk.toLowerCase()}>{sk}</li>
						))}
					</ul>
					<div className='buttons'>
						<ToProjectButtons
							handleGitKeyDown={(e) => handleLastButtonKeyDown(e)}
							githubLink={githubLink}
							projectLink={projectLink}
							projectTitle={projectTitle}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Group;
