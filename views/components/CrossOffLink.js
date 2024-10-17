const CrossOffLink = ({href, dataText}) => {
	return (
		<div className="link-wrapper"> 
			<a data-text={dataText} className='link' target="_blank" href={href}>
				{dataText}
			</a>
		</div>
	)
}

export default CrossOffLink