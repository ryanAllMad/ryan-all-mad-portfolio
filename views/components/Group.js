import * as React from 'react';
import ToProjectButtons from './ToProjectButtons.js';

const Group = (props) => {
	const { id, title, skills, projectLink, githubLink, projectTitle, tooltipTitle } = props;
	const [showOnHover, setShowOnHover] = React.useState(false);
	const [focussedClass, setFocussedClass] = React.useState('');

	const handleMouseOver = () => {
		setShowOnHover(true);
		setFocussedClass('focussed zoom-scroll');
	};

	return (
		<div
			onFocus={handleMouseOver}
			onMouseOver={handleMouseOver}
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
							githubLink={githubLink}
							projectLink={projectLink}
							projectTitle={projectTitle}
							tooltipTitle={tooltipTitle}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Group;
