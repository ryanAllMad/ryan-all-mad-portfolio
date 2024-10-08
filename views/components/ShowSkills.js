import CrossOffLink from "./CrossOffLink.js";

const ShowSkills = (props) => {
	const { onClick, classes } = props;
	const skillsArr = [
		`JavaScript`,
		`React`,
		`Typescript`,
		`Node`,
		`Azure`,
		`Git`,
		`Github`,
		`SCSS/CSS`,
		`WCAG`,
		`NPM`,
		`CircleCI`,
		`Demo's`,
		`Technical Writing`,
	];
	return (
		<div
			id='skills-menu'
			className={`show-skills ${classes}`}
			tabIndex={0}
		>
			<h2>Skills</h2>
			<ul>
				{skillsArr.map((sk) => (
					<li key={sk.toLowerCase()}>{sk}</li>
				))}
				<CrossOffLink href="https://codepen.io/all-mad-designs" dataText="See my CSS portfolio here ⍈" />
			</ul>
			<button
				class='close-skills'
				onClick={onClick}
			>
				<span>&#9661;</span><span className='screen-reader-text'>close skills menu</span>
			</button>
		</div>
	);
};
export default ShowSkills;
