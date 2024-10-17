const CrossOffLink = ({href, dataText, onFocus}) => {
	return (
		<div className="link-wrapper"> 
			<a onFocus={onFocus} data-text={dataText} className='link' target="_blank" href={href}>
				{dataText}
			</a>
		</div>
	)
}

export default CrossOffLink