const ToProjectButtons = (props) => {
	const { projectLink, githubLink, projectTitle, hasButtons } = props;
	return (
		<div className='buttons'>
			{hasButtons && (
			<><a
				role="button"
				tabIndex={-1}
				className='btn'
				href={projectLink}
				target='_blank'
			>
				{projectTitle}
			</a>
			<a
				role="button"
				className='btn'
				tabIndex={-1}
				href={githubLink}
				target='_blank'
			>
				See the code {<span className='screen-reader-text'>for {projectTitle}</span>}
			</a>
			</>)}
		</div>
	);
};

export default ToProjectButtons