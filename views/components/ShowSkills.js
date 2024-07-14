const ShowSkills = (props) => {
	const { onClick } = props;
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
		<div
			id='skills-menu'
			className='show-skills'
			tabIndex={0}
		>
			<h2>Skills</h2>
			<ul>
				{skillsArr.map((sk) => (
					<li key={sk.toLowerCase()}>{sk}</li>
				))}
				<a
					href='https://github.com/ryanAllMad/ryan-all-mad-portfolio'
					target='_blank'
				>
					See the code for this portfolio here
				</a>
			</ul>
			<button
				class='close-skills'
				onClick={onClick}
			>
				X<span className='screen-reader-text'>close skills menu</span>
			</button>
		</div>
	);
};
export default ShowSkills;
