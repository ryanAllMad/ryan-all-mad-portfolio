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
				className={`btn${projectLink ? '' : ' disabled'}`}
				href={projectLink}
				target={projectLink && '_blank'}
				aria-describedby='button-tool-tip'
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
		</div>
	);
};

export default ToProjectButtons;
