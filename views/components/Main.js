import { useRef, useEffect, useState } from 'react';
import Group from './Group.js';
import ToProjectButtons from './ToProjectButtons.js';
import '../../assets/images/js-job-helper.mp4';
import '../../assets/images/a11y-vid.mp4';
import * as confetti from 'canvas-confetti';

const Main = () => {
	const [isLoaded, setIsLoaded] = useState(false);
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
	const groupOneRef = useRef();
	const groupTwoRef = useRef();
	const groupThreeRef = useRef();
	const groupFourRef = useRef();
	const groupFiveRef = useRef();
	const groupSixRef = useRef();
	const svgRef = useRef();
	const otherSvgRef = useRef();
	const playVid = (el) => {
		el.play();
	};
	const pauseVid = (el) => {
		el.pause();
	};
	const triggerAnimations = (el, animationFrames, animationTiming) => {
		el.animate(animationFrames, animationTiming);
		el.classList.add('show');
	};
	const animationTiming = {
		duration: 1000,
		iterations: 1,
	};
	const videoTransforms = [{ scale: '0 1' }, { scale: '1 1' }];
	const evenAnimations = [
		{ transform: `translateY(150%)`, opacity: 0 },
		{ transform: `translateY(50%)` },
		{ transform: `translateY(0%)`, opacity: 1 },
	];
	const oddAnimations = [
		{ transform: `translateX(150%)`, opacity: 0 },
		{ transform: `translateX(50%)` },
		{ transform: `translateX(0%)`, opacity: 1 },
	];
	const gooeyAnimation = [
		{ filter: 'blur(0rem)', opacity: 0 },
		{ filter: 'blur(0.1rem)', opacity: 1 },
		{ filter: 'blur(0.25rem)' },
		{ filter: 'blur(0.1rem)' },
		{ filter: 'blur(0rem)' },
	];
	const otherGooeyAnimation = [
		{ filter: 'blur(0rem)', transform: 'translateX(-6rem)', opacity: 0 },
		{ filter: 'blur(0.1rem)', transform: 'translateX(-3rem)', opacity: 1 },
		{ filter: 'blur(0.25rem)', transform: 'translateX(0)' },
		{ filter: 'blur(0.1rem)', transform: 'translateX(-3rem)' },
		{ filter: 'blur(0rem)', transform: 'translateX(-6rem)' },
	];
	const onMouseMove = () => {
		triggerAnimations(svgRef.current, gooeyAnimation, {
			duration: 2000,
			iterations: Infinity,
			easing: 'linear',
		});
		triggerAnimations(otherSvgRef.current, otherGooeyAnimation, {
			duration: 2000,
			iterations: Infinity,
			easing: 'linear',
		});
	};
	const onLoadWindow = () => {
		setIsLoaded(true);
		triggerAnimations(
			groupOneRef.current,
			videoTransforms,
			animationTiming
		);
		triggerAnimations(
			groupTwoRef.current,
			videoTransforms,
			animationTiming
		);
		triggerAnimations(
			groupThreeRef.current,
			oddAnimations,
			animationTiming
		);
		triggerAnimations(
			groupFourRef.current,
			evenAnimations,
			animationTiming
		);
		triggerAnimations(groupFiveRef.current, oddAnimations, animationTiming);
		triggerAnimations(groupSixRef.current, evenAnimations, animationTiming);
	};
	const handleButton = () => {		
		if(clickMe === 'Click to Start Videos') {
			confetti.default();
			setClickMe('Pause videos');
			playVid(vidRef.current);
			playVid(a11yVidRef.current);
		} else {
			setClickMe('Click to Start Videos');
			pauseVid(vidRef.current);
			pauseVid(a11yVidRef.current);
		}
		
	};
	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('load', () => {
					onLoadWindow();
			});
			window.addEventListener('mousemove', (event) => {
				setLeft(event.pageX + 4 + 'px');
				setTop(event.pageY + 4);
			});
			window.addEventListener('mouseleave', () => {
				setIsLoaded(false);
			});
			mainRef.current.addEventListener('mouseenter', () => {
				onMouseMove();
			});
		}
	}, [window]);
	return (
		<main ref={mainRef}>
			{isLoaded && (
				<div
					className='gooeys'
					style={{ position: 'absolute', top: top, left: left }}
				>
					<div style={{ position: 'relative' }}>
						<svg
							ref={otherSvgRef}
							style={{
								position: 'absolute',
								top: '10px',
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
							style={{
								position: 'absolute',
								top: 0,
								left: '20px',
								fill: fill,
							}}
							ref={svgRef}
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
				onMouseEnter={() => setFill('transparent')}
				onMouseLeave={() => setFill('rgb(246 4 4)')}
				ref={groupOneRef}
				className='project one'
			>
				<video
				onFocus={() => {
					playVid(vidRef.current)
					setClickMe('Pause videos');
				}}
				onMouseEnter={() => {
					playVid(vidRef.current)
					setClickMe('Pause videos');
				}}
					
				onMouseLeave={() => {
					pauseVid(vidRef.current)
					setClickMe('Click to Start Videos');
				}}
				onBlur={() => {
					pauseVid(vidRef.current)
					setClickMe('Click to Start Videos');
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
				onMouseEnter={() => setFill('transparent')}
				onMouseLeave={() => setFill('rgb(246 4 4)')}
				ref={groupTwoRef}
				className='project two'
			>
				<video
				onFocus={() => {
					playVid(a11yVidRef.current)
					setClickMe('Pause videos');
				}}
				onMouseOver={() => {
					playVid(a11yVidRef.current)
					setClickMe('Pause videos');
				}}
				onBlur={() => {
					pauseVid(a11yVidRef.current)
					setClickMe('Click to Start Videos');
					}}
				onMouseOut={() => {
					pauseVid(a11yVidRef.current)
					setClickMe('Click to Start Videos');
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
				ref={groupThreeRef}
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
				ref={groupFourRef}
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
				ref={groupFiveRef}
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
				ref={groupSixRef}
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
