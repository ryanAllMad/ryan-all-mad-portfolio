const ToProjectButtons = (props) => {
	const {
		projectLink,
		githubLink,
		projectTitle,
	} = props;

	return (
		<>
			<a
				className={`btn${projectLink ? '' : ' disabled'}`}
				href={projectLink}
				target={projectLink ? '_blank' : '_self'}
			>
				{projectLink ? (
					<><span className='screen-reader-text'>to project</span>{projectTitle}</>
					) : <><span className='screen-reader-text'>This project isn't published.</span>{projectTitle}</>}
			</a>
			<a
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
