import { useRef } from 'react';
import Group from './Group.js';
import ToProjectButtons from './ToProjectButtons.js';
import '../../assets/images/js-job-helper.mp4';
import '../../assets/images/a11y-vid.mp4';

const Main = () => {
	const demoSkills = [
		'Demo/Presentation skills',
		'Node',
		'MongoDB',
		'React + React SSR',
		'Webpack',
		'CSS3',
	];
	const portfolioSkills = [
		'React SSR',
		'React',
		'CSS3',
		'Node',
		'Azure'
	]
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
	const blogSkills = [
		'SEO',
		'Technical Writing',
		'Mentoring',
		'Front end',
		'Javascript'
	]
	const vidRef = useRef()
	const a11yVidRef = useRef()
	const playVid = (el) => {
		el.play()
	}
	const pauseVid = (el) => {
		el.pause()
	}
	return (
		<main>
			<section className='mobile-hidden logo'></section>
			<section className='project one'>
			<video
						onFocus={() => playVid(vidRef.current)}
						onMouseOver={() => playVid(vidRef.current)}
						onMouseOut={() => pauseVid(vidRef.current)}
						onBlur={() => pauseVid(vidRef.current)}
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
			<section className='project two'>
			<video
						onFocus={() => playVid(a11yVidRef.current)}
						onMouseOver={() => playVid(a11yVidRef.current)}
						onBlur={() => pauseVid(a11yVidRef.current)}
						onMouseOut={() => pauseVid(a11yVidRef.current)}
						ref={a11yVidRef}
						id="a11y-vid"
						loop
						controls
					>
						<source
							src='/a11y-vid.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
					<ToProjectButtons
							githubLink='https://github.com/ryanAllMad/a11y-react'
							projectLink=''
							projectTitle='WAI-ARIA Authoring Patterns'
							tooltipTitle="Test suite in vitest"
						/>
			</section>
			<section className='project three'>
				<Group
					id='portfolio'
					title="My Portfolio on Azure"
					skills={portfolioSkills}
					tooltipTitle="You are here!"
					githubLink='https://github.com/ryanAllMad/ryan-all-mad-portfolio'
					projectTitle='My portfolio'
				/>
			</section>
			<section className='project four'>
			<Group
					id='dnd'
					title='DnD Character sheet'
					skills={dndSkills}
					projectLink='https://yong-character-sheet.vercel.app/'
					githubLink='https://github.com/ryanAllMad/yong-character-sheet'
					projectTitle='DnD Character Sheet'
				/>
			</section>
			<section className='project five'>
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
			<section className='project six'>
				<Group
				id='blog'
				title='All Mad Designs Blog'
				skills={blogSkills}
				projectLink='https://allmaddesigns.com'
				projectTitle='My Tech Blog'
				/>
			</section>
		</main>
	);
};

export default Main;
