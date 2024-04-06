const Group = (props) => {
	const {title, skills} = props
	return (
		<div className='group'>
			<h2>{title}</h2>
			<p>Built with:</p>
			<ul>
				{skills.map((sk) => (
					<li key={sk.toLowerCase()}>{sk}</li>
				) )}
			</ul>
		</div>
	);
};

export default Group
