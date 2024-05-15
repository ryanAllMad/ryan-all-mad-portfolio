
const ShowSkills = (props) => {
	const {onClick} = props
	const skillsArr = [
		`JavaScript`,
		`React`,
		`Typescript`,
		`Redux `,
		`Node`,
		`Azure`,
		`Git`,
		`Github`,
		`SCSS/CSS`,
		`PHP`,
		`WCAG`,
		`NPM`,
		`CircleCI`,
		`WordPress`,
		`Gutenberg`,
	];
	return (
		<div id="skills-menu" className="show-skills" tabIndex={0}>
		<h2>Skills</h2>
		<ul>
			{skillsArr.map((sk) => (
				<li key={sk.toLowerCase()}>{sk}</li>
			))}
		</ul>
		<button class="close-skills" onClick={onClick}>X<span className="screen-reader-text">close skills menu</span></button>
		</div>
	)
}
export default ShowSkills