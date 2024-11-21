const ShowSkills = (props) => {
	const skillsArr = [
		`Node/Express`,
		`REST`,
		`Git/Github`,
		`MongoDB`,
		`SCSS/CSS`,
		`NPM`,
		`CI/CD`,
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
