const ShowSkills = (props) => {
	const skillsArr = [
		`Node`,
		`Azure`,
		`Git`,
		`Github`,
		`SCSS/CSS`,
		`NPM`,
		`CircleCI`,
		`Demo's`,
		`Technical Writing`,
	];

	return (
		<div
			role='region'
			id='skills-menu'
			aria-labelledby='accordion-heading'
			className='skills-container'
		>
			{skillsArr.map((sk) => (
				<li key={sk.toLowerCase()}>{sk}</li>
			))}
		</div>
	);
};
export default ShowSkills;
