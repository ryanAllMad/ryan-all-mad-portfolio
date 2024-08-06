import { useRef, useEffect, useState } from 'react';
import Group from './Group.js';
import ToProjectButtons from './ToProjectButtons.js';
import '../../assets/images/js-job-helper.mp4';
import '../../assets/images/a11y-vid.mp4';
import * as confetti from 'canvas-confetti';

const Main = () => {
	const [playState, setPlayState] = useState(false);
	const [vidOneClass, setVidOneClass] = useState('')
	const [vidTwoClass, setVidTwoClass] = useState('')
	const [icon, setIcon] = useState('▶')
	const [clickMe, setClickMe] = useState('Click to Start Videos');
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
	};
	const pauseVid = (el) => {
		el.pause();
	};

	const handleButton = () => {	
		setPlayState(!playState)
	};
	const handlePlayState = (ref) => {
		if(playState) {
			playVid(ref)
			setIcon('▣')
			setClickMe('Stop videos');
		}
	}
	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('mouseleave', () => {
				setIsLoaded(false);
			});
		}
	}, [window]);
	useEffect(() => {
		if(playState) {
			confetti.default();
			setIcon('▣')
			setClickMe('Stop videos');
			playVid(vidRef.current);
			playVid(a11yVidRef.current);
		} else {
			setIcon('▶')
			setClickMe('Click to Start Videos');
			pauseVid(vidRef.current);
			pauseVid(a11yVidRef.current);
		}
	}, [playState])
	return (
		<main>
			<section class='clickme'>
				<button aria-pressed={icon === '▣'} onClick={handleButton}><span className='click-icon'>{icon}</span>{clickMe}</button>
			</section>
			<section
				className='mobile-hidden logo'
			></section>
			<section
				tabIndex={0}
				onMouseEnter={() => {
					handlePlayState(vidRef.current)
					setVidOneClass('show-vids')
				}}
				onFocus={() => {
					handlePlayState(vidRef.current)
					setVidOneClass('show-vids')
				}}
				onBlur={() => {
					setVidOneClass('')
					pauseVid(vidRef.current)
				}}
				onMouseLeave={() => {
					setVidOneClass('')
					pauseVid(vidRef.current)
				}}
				className={`project one ${vidOneClass}`}
			>
				{vidOneClass === 'show-vids' &&<div>
					<h2>JS Job Helper: React App</h2>
					<p>This project was built with Node, MongoDB, React, Webpack, Babel, and CSS from scratch.</p>
					<p>I built this completely on my own for myself and other Javascrpt Engineers looking for a free tool to help them tailor their resume's and save them precious time and energy.</p>
					</div>}
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

				<ToProjectButtons
					githubLink='https://github.com/ryanAllMad/js-job-helper'
					projectLink=''
					projectTitle='JS Job Helper: Open Source Project'
				/>
			</section>
			<section
				tabIndex={0}
				onMouseEnter={() => {
					setVidTwoClass('show-vids')
					handlePlayState(a11yVidRef.current)
				}}
				onFocus={() => {
					setVidTwoClass('show-vids')
					handlePlayState(a11yVidRef.current)
				}}
				onBlur={() => {
					setVidTwoClass('')
					pauseVid(a11yVidRef.current)
				}}
				onMouseLeave={() => {
					setVidTwoClass('')
					pauseVid(a11yVidRef.current)
				}}
				className={`project two ${vidTwoClass}`}
			>
				{vidTwoClass === 'show-vids' &&<div>
					<h2>Vitest Test Suite</h2>
					<p>This project was built with Deque's React component library 'Cauldron', and Vite with Vitest.</p>
					<p>I built this completely on my own for myself and other React Engineers looking to build their React widgets with accessibility from test driven development.</p>
					</div>}
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
				<ToProjectButtons
					githubLink='https://github.com/ryanAllMad/a11y-react'
					projectLink=''
					projectTitle='WAI-ARIA Authoring Patterns Test Suite'
				/>
			</section>
			<section
				className='project three'
			>
				<Group
					id='portfolio'
					title='Portfolio: allmaddev.com'
					skills={portfolioSkills}
					githubLink='https://github.com/ryanAllMad/ryan-all-mad-portfolio'
					projectTitle='My portfolio'
				/>
			</section>
			<section
				className='project four'
			>
				<Group
					id='dnd'
					title='DnD Character sheet NextJS App'
					skills={dndSkills}
					projectLink='https://yong-character-sheet.vercel.app/'
					githubLink='https://github.com/ryanAllMad/yong-character-sheet'
					projectTitle='DnD Character sheet'
				/>
			</section>
			<section
				className='project five'
			>
				<Group
					id='ally'
					title='A11y Check: WordPress Plugin'
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
					skills={blogSkills}
					projectLink='https://allmaddesigns.com'
					projectTitle='My Tech Blog'
				/>
			</section>
		</main>
	);
};

export default Main;
