import * as React from 'react'

const ToProjectButtons = (props) => {
	const {
		projectLink,
		githubLink,
		projectTitle,
		tooltipTitle
	} = props;
	const [showTooltip, setShowTooltip] = React.useState(false)
	const renderTooltip = (bool) => {
		if(projectLink) {
			return
		}
		setShowTooltip(bool)
	}
	const hideToolTip = (e) => {
		if(e.key === 'Escape') {
			setShowTooltip(false)
		}
	}

	return (
		<div className='js-vid-caption'>
			{!projectLink && showTooltip && <div id="button-tool-tip" className="button-tool-tip" role="tooltip">{tooltipTitle}</div>}
			<a
				onKeyDown={(e) => hideToolTip(e)}
				onFocus={() => renderTooltip(true)}
				onBlur={() => renderTooltip(false)}
				onMouseOver={() => renderTooltip(true)}
				onMouseLeave={() => renderTooltip(false)}
				onClick={(e) => {
					if(!projectLink) {
						e.preventDefault()
					}
				}}
				className={`btn${projectLink ? '' : ' disabled'}`}
				href={projectLink}
				tabIndex={!projectLink ? '-1' : '0'}
				target={projectLink && '_blank'}
				aria-describedby='button-tool-tip'
			>
				{projectLink ? (
					<><span className='screen-reader-text'>to project</span>{projectTitle}</>
					) : <><span className='screen-reader-text'>This link is disabled.</span>{projectTitle}</>}
			</a>
			<a
				className={`btn ${!githubLink && 'disabled'}`}
				href={githubLink}
				tabIndex={!githubLink ? '-1' : '0'}
				onClick={(e) => {
					if(!githubLink) {
						e.preventDefault()
					}
				}}
				target='_blank'
			>
				{githubLink ? (
					<>
						{`See the code`}
						<span className='screen-reader-text'>on Github</span>
					</>
			) : (
			<>
			{githubLink ? projectTitle : ''}
			<span className='screen-reader-text'>This link is disabled</span>
			</>
			)}
			</a>
		</div>
	);
};

export default ToProjectButtons;
