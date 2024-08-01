import { useRef, useEffect, useState } from 'react';
import Group from './Group.js';
import ToProjectButtons from './ToProjectButtons.js';
import '../../assets/images/js-job-helper.mp4';
import '../../assets/images/a11y-vid.mp4';
import { triggerAnimations } from '../helpers/helpers.js';
import * as confetti from 'canvas-confetti';

const Main = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [playState, setPlayState] = useState(false)
	const [vidOneClass, setVidOneClass] = useState('')
	const [vidTwoClass, setVidTwoClass] = useState('')
	const [left, setLeft] = useState();
	const [top, setTop] = useState();
	const [fill, setFill] = useState('rgb(246 4 4)');
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
	const mainRef = useRef();
	const vidRef = useRef();
	const a11yVidRef = useRef();
	const svgRef = useRef();
	const otherSvgRef = useRef();
	const playVid = (el) => {
		el.play();
	};
	const pauseVid = (el) => {
		el.pause();
	};

	const gooeyAnimation = [
		{ filter: 'blur(0rem)', opacity: 0 },
		{ filter: 'blur(0.1rem)', opacity: 1 },
		{ filter: 'blur(0.25rem)' },
		{ filter: 'blur(0.1rem)' },
		{ filter: 'blur(0rem)' },
	];
	const otherGooeyAnimation = [
		{ filter: 'blur(0rem)', transform: 'translateX(-40px)', opacity: 0 },
		{ filter: 'blur(0.1rem)', transform: 'translateX(-20px)', opacity: 1 },
		{ filter: 'blur(0.25rem)', transform: 'translateX(0)' },
		{ filter: 'blur(0.1rem)', transform: 'translateX(-20px)' },
		{ filter: 'blur(0rem)', transform: 'translateX(-40px)' },
	];
	const onMouseMove = () => {
		triggerAnimations(svgRef.current, gooeyAnimation, {
			duration: 2500,
			iterations: Infinity,
			easing: 'linear',
		});
		triggerAnimations(otherSvgRef.current, otherGooeyAnimation, {
			duration: 2500,
			iterations: Infinity,
			easing: 'linear',
		});
	};
	const onLoadWindow = () => {
		setIsLoaded(true);
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
			window.addEventListener('load', () => {
				onLoadWindow();
			});
			window.addEventListener('mousemove', (event) => {
				setLeft(event.pageX + 4  + 'px');
				setTop(event.pageY + 4 + 'px');
			});
			window.addEventListener('mouseleave', () => {
				setIsLoaded(false);
			});
			mainRef.current.addEventListener('mouseenter', () => {
				onMouseMove();
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
		<main ref={mainRef}>
			{isLoaded && (
				<div
					className='gooeys'
					style={{ position: 'absolute', top: top, left: left }}
				>
					<div style={{ position: 'relative' }}>
						<svg
							ref={svgRef}
							width="25"
							height="25"
							style={{
								position: 'absolute',
								top: '0px',
								fill: fill,
							}}
							class='dot gooey'
							viewBox='0 0 100 100'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle
								cx='50'
								cy='50'
								r='50'
							></circle>
						</svg>
						<svg
							width="25"
							height="25"
							style={{
								position: 'absolute',
								top: '5px',
								left: '0px',
								fill: fill,
							}}
							ref={otherSvgRef}
							class='dot gooey'
							viewBox='0 0 100 100'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle
								cx='50'
								cy='50'
								r='50'
							></circle>
						</svg>
					</div>
					<svg
							xmlns='http://www.w3.org/2000/svg'
							version='1.1'
						>
							<defs>
								<filter id='gooey-filter'>
									<feGaussianBlur
										in='SourceGraphic'
										stdDeviation='9'
										result='blur'
									/>
									<feColorMatrix
										in='blur'
										mode='matrix'
										values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
										result='goo'
									/>
									<feComposite
										in='SourceGraphic'
										in2='goo'
										operator='atop'
									/>
								</filter>
							</defs>
						</svg>
				</div>
			)}
			<section class='clickme'>
				{clickMe !== '' && (
					<button onClick={handleButton}>{clickMe}</button>
				)}
			</section>
			<section
				onMouseEnter={() => setFill('#fff')}
				onMouseLeave={() => setFill('rgb(246 4 4)')}
				className='mobile-hidden logo'
			></section>
			<section
				onMouseEnter={() => {
					setFill('transparent')
					setVidOneClass('show-vids')
				}}
				onMouseLeave={() => setFill('rgb(246 4 4)')}
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
				onMouseEnter={() => {
					setFill('transparent')
					setVidTwoClass('show-vids')
				}}
				onMouseLeave={() => setFill('rgb(246 4 4)')}
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
