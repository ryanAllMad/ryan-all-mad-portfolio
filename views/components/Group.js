const Group = (props) => {
	const {id, title, skills, children} = props
	return (
		<div id={id} className='group'>
			<h2>{title}</h2>
			<p>Built with:</p>
			<ul>
				{skills.map((sk) => (
					<li key={sk.toLowerCase()}>{sk}</li>
				) )}
			</ul>
			{children}
		</div>
	);
};

export default Group
