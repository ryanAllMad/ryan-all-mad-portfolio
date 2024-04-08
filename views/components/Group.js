import * as React from 'react';
import ToProjectButtons from './ToProjectButtons.js';

const Group = (props) => {
	const { id, title, skills, projectLink, githubLink, projectTitle } = props;
	const [showOnHover, setShowOnHover] = React.useState(false);

	const handleMouseOver = () => {
		setShowOnHover(true);
	};
	const handleMouseOut = () => {
		setShowOnHover(false);
	};
	const handleGroupKeyDown = (e) => {
		if(e.key === 'Shift') {
			setShowOnHover(false)
		}
	}
	const handleLastButtonKeyDown = (e) => {
		if(e.key === 'Tab') {
			setShowOnHover(false)
		}
	}
		
	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onFocus={handleMouseOver}
			onKeyDown={(e) => handleGroupKeyDown(e)}
			id={id}
			className='group'
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
