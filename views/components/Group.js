import * as React from 'react';
import ToProjectButtons from './ToProjectButtons.js';

const Group = (props) => {
	const { id, title, skills, projectLink, githubLink, projectTitle } = props;
	//const groupRef = React.useRef(null)
	const [buttons, setButtons] = React.useState(false);

	const handleMouseOver = () => {
		setButtons(true);
	};
	const handleMouseOut = () => {
		setButtons(false)
	}

	return (
		<div
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			id={id}
			className='group'
		>
			<h2>{title}</h2>
			<p>Built with:</p>
			<ul>
				{skills.map((sk) => (
					<li key={sk.toLowerCase()}>{sk}</li>
				))}
			</ul>
			{buttons && (
				<ToProjectButtons
					projectLink={projectLink}
					githubLink={githubLink}
					projectTitle={projectTitle}
				/>
			)}
		</div>
	);
};

export default Group;
