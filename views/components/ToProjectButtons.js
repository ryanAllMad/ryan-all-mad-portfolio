import * as React from 'react'

const ToProjectButtons = (props) => {
	const {
		projectLink,
		githubLink,
		projectTitle,
	} = props;

	return (
		<div className='js-vid-caption'>
			{projectLink && <a
				className={`btn ${projectLink}`}
				href={projectLink}
				tabIndex='0'
				target='_blank'
				aria-describedby='button-tool-tip'
			>
				<span className='screen-reader-text'>to project</span>{projectTitle}
			</a>}
			{githubLink && <a
				className={`btn ${!githubLink}`}
				href={githubLink}
				tabIndex='0'
				target='_blank'
			>
			See the code
						<span className='screen-reader-text'>on Github</span>
			</a>}
		</div>
	);
};

export default ToProjectButtons;
