import { useRef, useEffect, useState } from 'react';
import Group from './Group.js';
import ToProjectButtons from './ToProjectButtons.js';
import '../../assets/images/js-job-helper.mp4';
import '../../assets/images/a11y-vid.mp4';
import * as confetti from 'canvas-confetti';

const Main = () => {
	const [icon, setIcon] = useState('▶')
	const [a11yIcon, setA11yIcon] = useState('▶')
	const [clickMe, setClickMe] = useState('Click to Play');
	const [clickA11yMe, setClickA11yMe] = useState('Click to Play');
	const [eatDrink, setEatDrink] = useState('748px')

	const portfolioSkills = ['React SSR', 'React', 'CSS3', 'Node', 'Azure'];
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
		'Javascript',
	];
	const vidRef = useRef();
	const a11yVidRef = useRef();
	const playVid = (el) => {
		el.play();
		el.style.opacity = '1'
	};
	const pauseVid = (el) => {
		el.pause();
		el.style.opacity = '0.5'
	};

	const handleVidPlayState = () => {
		if (icon === '▶') {
			playVid(vidRef.current)
			setIcon('▣')
			setClickMe('Click to Stop');
			confetti.default();
		} else {
			pauseVid(vidRef.current)
			setIcon('▶')
			setClickMe('Click to Play');
		}
	}
	const handleA11yPlayState = () => {
		if (a11yIcon === '▶') {
			playVid(a11yVidRef.current)
			setA11yIcon('▣')
			setClickA11yMe('Click to Stop');
			confetti.default();
		} else {
			pauseVid(a11yVidRef.current)
			setA11yIcon('▶')
			setClickA11yMe('Click to Play');
		}
	}
	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('scroll', () => {
				const scrollVal = window.scrollY
				const newVal = 748 - scrollVal
				if(newVal >= 0) {
					setEatDrink(`${newVal}px`)
				}
			})
		}
	}, [window]);
	return (
		<main>
			<section className='project me'>
				<div className='profile img' style={{width: eatDrink}}>
					<img alt="white woman, red hair, smiling." src="/images/me.png" />
				</div>
				<div className='bio'>
					<h1>Ryan Duer: Software Engineer</h1>
					<p>
						Hey! Thanks for stopping by! I've gathered together my most complete
						and recent work for you to check out! 
					</p>
					<p>
						I'm a Software Engineer, with a long background in Support Engineering. 
						I develop with a core focus on user experience and have a wealth of hands on experience understanding user needs.
						I pride myself on my collaborative and positive spirit and am always working to better myself and help those around me.
					</p>
					<p>
						Feel free to check me out <a href="https://www.linkedin.com/in/ryan-duer">on LinkedIn</a>
						Don't forget to take a look at some of my relevant skills in the header menu or the footer!
					</p>
					
					<h2>Top Skills</h2>
					<ul>
						<li>React</li>
						<li>Typescript</li>
						<li>Javascript</li>
						<li>Cross team collab</li>
						<li>Always learning new skills!</li>
					</ul>
				</div>
			</section>
			<section className='heading'>
				<div className='heading-wave first'>
				<h2>Projects</h2>
				</div>
				<div className='heading-wave sec'>
				<h2>Projects</h2>
				</div>
			</section>
			<section
				tabIndex={0}
				className={`project one`}
			>
				<div className='one-wrappper'>
					<div className='bio'>
						<h3>JS Job Helper: Node App</h3>
						<p>
							This project was built with Node, Express, Mongoose, MongoDB, React, Vite, Vitest, CSS3, and uses CircleCI 
							to run Vitests in the Continuous Integration Pipeline.
						</p>
						<p>
							I built this completely on my own for myself and other Javascrpt Engineers looking for a free tool to help them tailor
							their resume's and save them precious time and energy.
						</p>
						</div>
					<div className='video-box'>
					<video
						ref={vidRef}
						id='js-vid'
						loop
					>
						<source
							src='/js-job-helper.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
					<div class='clickme'>
						<button aria-pressed={icon === '▣'} onClick={handleVidPlayState}><span className='click-icon'>{icon}</span>{clickMe}</button>
					</div>
					</div>
					<ToProjectButtons
						githubLink='https://github.com/ryanAllMad/js-job-helper'
						projectLink=''
						projectTitle='JS Job Helper: Open Source Project'
					/>
				</div>
			</section>
			<section
				tabIndex={0}
				className={`project two`}
			>
				<div className='two-wrapper'>
					<div className='bio'>
						<h3>Vitest Accessibility Test Suite</h3>
						<p>This project was built with Deque's React component library 'Cauldron', and Vite with Vitest.</p>
						<p>I built this completely on my own for myself and other React Engineers looking to build their React widgets with accessibility from test driven development.</p>
					</div>
					<div className='video-box'>
					<video
						ref={a11yVidRef}
						id='a11y-vid'
						loop
					>
						<source
							loop
							src='/a11y-vid.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
					<div class='clickme'>
						<button aria-pressed={a11yIcon === '▣'} onClick={handleA11yPlayState}><span className='click-icon'>{a11yIcon}</span>{clickA11yMe}</button>
					</div>
					</div>
					<ToProjectButtons
						githubLink='https://github.com/ryanAllMad/a11y-react'
						projectLink=''
						projectTitle='WAI-ARIA Authoring Patterns Test Suite'
					/>
				</div>
			</section>
			<section
				className='project three'
			>
				<Group
					id='dnd'
					title='DnD Character sheet NextJS App'
					description={`
						My DnD Character sheet was build with accessibility in mind and features screen reader access to all features,
						keyboard acccess to all features, skip blocks for easeir screen reader navigation, user prefers reduced motion assist, 
						and passes color contrast minimums. This project was build with Next JS, Material UI, and published to Vercel. 
						`}
					imageFile="yong-cell.png"
					imageAlt="mobile view of purple and grey dnd character sheet with female profile pic"
					skills={dndSkills}
					projectLink='https://yong-character-sheet.vercel.app/'
					githubLink='https://github.com/ryanAllMad/yong-character-sheet'
					projectTitle='DnD Character sheet'
				/>
			</section>
			<section
				className='project four'
			>
				<Group
					id='portfolio'
					description={`
						My portfolio is designed with CSS3 features like container queries and performant animations. 
						I build this with a Node backend, React on the Server and on the Front End, and launchd it on Azure.
						It took me about a week for the initial version to complete this project, though I've gone through several iterations now.
						`}
					title='Portfolio: allmaddev.com'
					skills={portfolioSkills}
					githubLink='https://github.com/ryanAllMad/ryan-all-mad-portfolio'
					projectTitle='My portfolio'
				/>
			</section>
			<section
				className='project five'
			>
				<Group
					id='ally'
					title='A11y Check: WordPress Plugin'
					description={`
						This WIP, is a plugin developed for Content Creators that use WordPress as a live checklist
						that alerts the author of common accessibility pitfalls as they write. It's akin to a linter for content creators.
						`}
					imageAlt="plugin sidebar in wordress editor shows images that are missing alt and one click ability to remedy it."
					imageFile="a11ycheckgif.gif"
					skills={allySkills}
					projectLink=''
					githubLink='https://github.com/ryanAllMad/a11y-checker'
					projectTitle='A11y Check'
				/>
			</section>
			<section
				className='project six'
			>
				<Group
					id='blog'
					title='All Mad Designs Blog'
					description={`
						My blog is where I use my passion for helping others, and educating engineers to resolve
						issues related to front end, WordPress, or Accessibility Engineering. 
						`}
					imageAlt="black pyramid with A M D, all mad designs logo on desktop screen."
					imageFile="amd-desktop.png"
					skills={blogSkills}
					projectLink='https://allmaddesigns.com'
					projectTitle='My Tech Blog'
				/>
			</section>
		</main>
	);
};

export default Main;
