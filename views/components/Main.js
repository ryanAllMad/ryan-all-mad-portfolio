import Group from './Group.js';

const Main = () => {
	const portfolioSkills = [
		'Node',
		'Azure',
		'React + React SSR',
		'Webpack',
		'CSS3',
	];
	const dndSkills = ['React', 'Typescript', 'NextJs', 'Material UI', 'CSS3'];
	const allySkills = [
		'React',
		'Typescript',
		'Gutenberg',
		'PHP',
		'SCSS',
		'CSS3',
		'Webpack',
	];
	const viteSkills = ['React', 'Vite', 'Redux', 'Material UI'];
	return (
		<main>
			<section className='mobile-hidden logo'></section>
			<section className='project one'>
				<Group
					id='portfolio'
					title='Portfolio'
					skills={portfolioSkills}
					projectLink='/'
					githubLink='https://github.com/ryanAllMad/ryan-all-mad-portfolio'
					projectTitle='Portfolio'
				/>
			</section>
			<section className='project two'>
				<Group
					id='dnd'
					title='DnD Character sheet'
					skills={dndSkills}
					projectLink='https://yong-character-sheet.vercel.app/'
					githubLink='https://github.com/ryanAllMad/yong-character-sheet'
					projectTitle='DnD Character Sheet'
				/>
			</section>
			<section className='project three'>
				<Group
					id='ally'
					title='A11y Check Plugin'
					skills={allySkills}
					projectLink='https://github.com/ryanAllMad/a11y-checker?tab=readme-ov-file#a11y-check'
					githubLink='https://github.com/ryanAllMad/a11y-checker'
					projectTitle='A11y Check'
				/>
			</section>
			<section className='project four'>
				<Group
					id='vite'
					title='Vite-React-Redux List'
					skills={viteSkills}
					projectLink='https://ryanallmad.github.io/myvite-react-proj/'
					githubLink='https://github.com/ryanAllMad/myvite-react-proj'
					projectTitle='Vite'
				/>
			</section>
		</main>
	);
};

export default Main