import * as React from 'react';
import Group from './Group.js';
import ToProjectButtons from './ToProjectButtons.js';


const BodyContent = () => {
	const portfolioSkills = [
		'Node',
		'React as a template engine',
		'Webpack',
		'Vanilla JS',
		'CSS3',
	];
	const dndSkills = ['React', 'Typescript', 'NextJs', 'Material UI', 'CSS3'];
	const allySkills = [
		'React',
		'Typescript',
		'Gutenberg',
		'WordPress',
		'PHP',
		'SCSS',
		'Webpack',
	];
	const viteSkills = ['React', 'Vite', 'Redux', 'Material UI'];
	const [buttons, setButtons] = React.useState(false);
	const [isClient, setIsClient] = React.useState(false);

	React.useEffect(() => {
		setIsClient(true)
	}, [])
	
	return (
		<>
		{isClient && (
			<>
			<section onClick={() => console.log('click')} className='mobile-hidden logo'></section>
			<section className='project one'>
			{`${buttons}`}
				<Group
					onMouseOver={() => setButtons(true)}
					id='portfolio'
					title='Portfolio'
					skills={portfolioSkills}
				>
					<ToProjectButtons
						hasButtons={buttons}
						projectLink='/'
						githubLink='/'
						projectTitle='Portfolio'
					/>
				</Group>
			</section>
			<section className='project two'>
				<Group
					onMouseOver={() => setButtons(true)}
					id='dnd'
					title='DnD Character sheet'
					skills={dndSkills}
				>
					<ToProjectButtons
						hasButtons={buttons}
						projectLink='https://yong-character-sheet.vercel.app/'
						githubLink='https://github.com/ryanAllMad/yong-character-sheet'
						projectTitle='DnD Character Sheet'
					/>
				</Group>
			</section>
			<section className='project three'>
				<Group
					onMouseOver={() => setButtons(true)}
					id='ally'
					title='A11y Check Plugin'
					skills={allySkills}
				>
					<ToProjectButtons
						hasButtons={buttons}
						projectLink='https://github.com/ryanAllMad/a11y-checker?tab=readme-ov-file#a11y-check'
						githubLink='https://github.com/ryanAllMad/a11y-checker'
						projectTitle='A11y Check'
					/>
				</Group>
			</section>
			<section className='project four'>
				<Group
					onMouseOver={() => setButtons(true)}
					id='vite'
					title='Vite-React-Redux List'
					skills={viteSkills}
				>
					<ToProjectButtons
						hasButtons={buttons}
						projectLink='https://ryanallmad.github.io/myvite-react-proj/'
						githubLink='https://github.com/ryanAllMad/myvite-react-proj'
						projectTitle='Vite React Typescript MUI Redux'
					/>
				</Group>
			</section>
			</>
		)
		}
		</>
	);
};

export default BodyContent;
