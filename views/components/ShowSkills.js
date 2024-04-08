
const ShowSkills = () => {
	const skillsArr = [
		`JavaScript`,
		`React`,
		`Typescript`,
		`Redux `,
		`Node `,
		`SCSS/CSS`,
		`PHP`,
		`WCAG`,
		`NPM`,
		`CircleCI`,
		`WordPress`,
		`Gutenberg`,
	];
	return (
		<div className="show-skills">
		<h2>Skills</h2>
		<ul>
			{skillsArr.map((sk) => (
				<li key={sk.toLowerCase()}>{sk}</li>
			))}
		</ul>
		</div>
	)
}
export default ShowSkills