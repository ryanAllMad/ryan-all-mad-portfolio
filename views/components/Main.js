import { useEffect, useRef } from 'react';
import Group from './Group.js';
import ToProjectButtons from './ToProjectButtons.js';
import '../../assets/images/js-job-helper.mp4';

const Main = () => {
	const demoSkills = [
		'Node',
		'MongoDB',
		'React + React SSR',
		'Webpack',
		'CSS3',
		'Demo skills',
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
	const vidRef = useRef()
	const playVid = () => {
		vidRef.current.play()
	}
	return (
		<main>
			<section className='mobile-hidden logo'></section>
			<section className='project one'>
				<Group
					id='dnd'
					title='DnD Character sheet'
					skills={dndSkills}
					projectLink='https://yong-character-sheet.vercel.app/'
					githubLink='https://github.com/ryanAllMad/yong-character-sheet'
					projectTitle='DnD Character Sheet'
				/>
			</section>
			<section className='project two'>
					<video
						onFocus={playVid}
						onMouseOver={playVid}
						ref={vidRef}
						id="js-vid"
						loop
						controls
					>
						<source
							src='/js-job-helper.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
					
					<ToProjectButtons
							githubLink='https://github.com/ryanAllMad/js-job-helper'
							projectLink=''
							projectTitle='JS Job Helper: Resume Builder App'
							tooltipTitle="Open source project for dev's"
						/>
			</section>
			<section className='project three'>
				<Group
					id='ally'
					title='A11y Check Plugin'
					skills={allySkills}
					projectLink=''
					tooltipTitle="Plugin available on Github"
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

export default Main;
