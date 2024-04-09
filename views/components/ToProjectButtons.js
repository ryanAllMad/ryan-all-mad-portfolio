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
				className={`btn${projectLink !== '/' ? '' : ' disabled'}`}
				href={projectLink}
				target={projectLink !== '/' ? '_blank' : '_self'}
			>
				{projectLink !== '/' ? projectTitle : 'You are here!'}
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
