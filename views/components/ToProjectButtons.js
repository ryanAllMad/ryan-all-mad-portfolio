const ToProjectButtons = (props) => {
	const {
		projectLink,
		githubLink,
		projectTitle,
		handleGitKeyDown
	} = props;
	return (
		<>
			<a
				className='btn'
				href={projectLink}
				target='_blank'
			>
				{projectTitle}
			</a>
			<a
				onKeyDown={handleGitKeyDown}
				className='btn'
				href={githubLink}
				target='_blank'
			>
				See the code{' '}
				{<span className='screen-reader-text'>for {projectTitle}</span>}
			</a>
		</>
	);
};

export default ToProjectButtons;
