import * as React from 'react';
import ToProjectButtons from './ToProjectButtons.js';

const Group = (props) => {
	const { id, title, skills, projectLink, githubLink, projectTitle, children } = props;
	const [showOnHover, setShowOnHover] = React.useState(false);
	const [focussedClass, setFocussedClass] = React.useState('');

	const handleMouseOver = () => {
		setShowOnHover(true);
		setFocussedClass('focussed');
	};

	return (
		<div
			onFocus={handleMouseOver}
			id={id}
			className={`group ${focussedClass}`}
			tabIndex={0}
		>
			{children && children}
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
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Group;
