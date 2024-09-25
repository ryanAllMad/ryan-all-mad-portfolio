import * as React from 'react'

const ToProjectButtons = (props) => {
	const {
		projectLink,
		githubLink,
		projectTitle,
	} = props;

	return (
		<div className='js-vid-caption'>
			<div className='btn'>
				{projectLink && <a
					className={`${projectLink}`}
					href={projectLink}
					tabIndex='0'
					target='_blank'
				>
					{`${projectTitle} ⍈`}<span className='screen-reader-text'>to published project</span>
				</a>}
			</div>
			<div className='btn'>
				{githubLink && <a
					className={`${!githubLink}`}
					href={githubLink}
					tabIndex='0'
					target='_blank'
				>
				{`See the code ⍈`}
							<span className='screen-reader-text'>on Github</span>
				</a>}
			</div>
			
		</div>
	);
};

export default ToProjectButtons;
