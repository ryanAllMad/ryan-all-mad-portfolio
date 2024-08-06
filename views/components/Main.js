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
			setClickMe('Stop videos');
			playVid(vidRef.current);
			playVid(a11yVidRef.current);
		} else {
			setClickMe('Click to Start Videos');
			pauseVid(vidRef.current);
			pauseVid(a11yVidRef.current);
		}
	}, [playState])
	return (
		<main>
			<section class='clickme'>
				{clickMe !== '' && (
					<button onClick={handleButton}>{clickMe}</button>
				)}
			</section>
			<section
				className='mobile-hidden logo'
			></section>
			<section
				onMouseEnter={() => setVidOneClass('show-vids')}
				className={`project one ${vidOneClass}`}
			>
				<video
				tabIndex={0}
				onFocus={() => handlePlayState(vidRef.current)}
				onMouseEnter={() => handlePlayState(vidRef.current)}
				onMouseLeave={() => {
					pauseVid(vidRef.current)
				}}
				onBlur={() => {
					pauseVid(vidRef.current)
				}}
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
					projectTitle='JS Job Helper: Resume Builder App'
					tooltipTitle="Open source project for dev's"
				/>
			</section>
			<section
				onMouseEnter={() => setVidTwoClass('show-vids')}
				className={`project two ${vidTwoClass}`}
			>
				<video
				tabIndex={0}
				onFocus={() => handlePlayState(a11yVidRef.current)}
				onMouseOver={() => handlePlayState(a11yVidRef.current)}
				onBlur={() => {
					pauseVid(a11yVidRef.current)
					}}
				onMouseOut={() => {
					pauseVid(a11yVidRef.current)
				}}
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
					projectTitle='WAI-ARIA Authoring Patterns'
					tooltipTitle='Test suite in vitest'
				/>
			</section>
			<section
				className='project three'
			>
				<Group
					id='portfolio'
					title='My Portfolio on Azure'
					skills={portfolioSkills}
					tooltipTitle='You are here!'
					githubLink='https://github.com/ryanAllMad/ryan-all-mad-portfolio'
					projectTitle='My portfolio'
				/>
			</section>
			<section
				className='project four'
			>
				<Group
					id='dnd'
					title='DnD Character sheet'
					skills={dndSkills}
					projectLink='https://yong-character-sheet.vercel.app/'
					githubLink='https://github.com/ryanAllMad/yong-character-sheet'
					projectTitle='DnD Character Sheet'
				/>
			</section>
			<section
				className='project five'
			>
				<Group
					id='ally'
					title='A11y Check Plugin'
					skills={allySkills}
					projectLink=''
					tooltipTitle='Plugin available on Github'
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
