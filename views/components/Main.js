import { useEffect, useState } from 'react';
import Group from './Group.js';
import VideoGroup from './VideoGroup.js';
import CrossOffLink from './CrossOffLink.js';
import ShowSkills from './ShowSkills.js';
import '../../assets/images/js-job-helper.mp4';
import '../../assets/images/a11y-vid.mp4';

const Main = () => {
	const [showSkills, setShowSkills] = useState(false);

	const handleShowSkills = () => {
		setShowSkills((prev) => (!prev ? true : false));
	};
	const [mePic, setMePic] = useState('me-smile.png');
	const [eatDrink, setEatDrink] = useState('748px');

	const portfolioSkills = ['Node', 'Express', 'React', 'CSS3', 'Azure'];
	const dndSkills = ['React', 'Typescript', 'NextJs', 'Material UI', 'CSS3'];
	const allySkills = [
		'React',
		'Typescript',
		'Next.JS',
		'UX',
		'Figma',
		'CSS3',
		'Design',
	];
	const blogSkills = [
		'React Native',
		'React',
		'CSS',
		'REST',
		'APIs',
		'GCP',
		'Javascript',
	];
	const jobHelperSkills = [
		'MongoDB',
		'Express',
		'React',
		'Node',
		'CSS3',
		'Vite',
		'CI/CD',
		'CircleCI',
		'Vitest',
	];
	const vitestSkills = [
		'Vite',
		'React',
		'WCAG',
		'Vitest',
		'CI/CD',
		'CircleCI',
	];

	useEffect(() => {
		if (typeof window !== undefined) {
			if (window.innerWidth > 999) {
				window.addEventListener('scroll', () => {
					const scrollVal = window.scrollY;
					const newVal = 900 - scrollVal;
					const windowPercentageScrolled = Math.round(
						(scrollVal / window.innerHeight) * 100
					);
					if (windowPercentageScrolled >= 30) {
						setMePic('me-oop.png');
					} else {
						setMePic('me-smile.png');
					}
					if (newVal >= 0) {
						setEatDrink(`${newVal}px`);
					}
				});
			}
			if (window.innerWidth <= 999) {
				setEatDrink(`300px`);
				window.addEventListener('scroll', () => {
					const scrollVal = window.scrollY;
					const newMobileVal = 300 - scrollVal;
					const mobilePercentageScrolled = Math.round(
						(scrollVal / window.innerHeight) * 100
					);
					if (newMobileVal >= 0) {
						setEatDrink(`${newMobileVal}px`);
					}
					if (mobilePercentageScrolled >= 1) {
						setMePic('me-oop.png');
					} else {
						setMePic('me-smile.png');
					}
				});
			}
		}
	}, [window]);
	return (
		<main>
			<section className='project me'>
				<div
					className='profile img'
					style={{ width: eatDrink }}
				>
					<img
						loading='eager'
						alt='white woman, red hair, smiling.'
						src={`/images/${mePic}`}
					/>
				</div>
				<div className='bio'>
					<h1>Hello! I'm Ryan.</h1>
					<p>
						Thanks for stopping by! I've gathered together my most
						complete and recent work for you to check out!
					</p>
					<p>
						I'm a Software Engineer, with a long background in
						Support Engineering. I develop with a core focus on user
						experience and have a wealth of hands-on experience
						understanding user needs. I pride myself on my
						collaborative and positive spirit and am always working
						to better myself and help those around me.
					</p>
					<p>
						Feel free to check me out
						<CrossOffLink
							href='https://www.linkedin.com/in/ryan-duer'
							dataText='on LinkedIn'
						/>
					</p>
					<CrossOffLink
						href='https://codepen.io/all-mad-designs'
						dataText='See my CSS portfolio here ⍈'
					/>
					<h2>Top Skills</h2>
					<ul>
						<li>React</li>
						<li>React Native</li>
						<li>Typescript</li>
						<li>Javascript</li>
						<li>WCAG</li>
						<li>CSS3</li>
						<li>Cross team collab</li>
						<div className='accordion'>
							<h3>
								<button
									aria-expanded={showSkills}
									aria-controls='skills-menu'
									id='accordion-heading'
									aria-label='see skills'
									onClick={handleShowSkills}
								>
									Show More Skills ...
									<span
										className={`arrow ${!showSkills ? '' : 'rotate'}`}
									>
										&#9661;
									</span>
								</button>
							</h3>
							{showSkills && (
								<ShowSkills
									onClick={() => {
										setShowSkills(false);
									}}
								/>
							)}
						</div>
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
				<VideoGroup
					title='Resume Builder: Node & React App'
					skills={jobHelperSkills}
					githubLink='https://github.com/ryanAllMad/js-job-helper'
					videoSrc='/js-job-helper.mp4'
				>
					<p>
						This project was built with a MERN stack using Node,
						Express, Mongoose, MongoDB, React, Vite, Vitest, CSS3,
						and uses CircleCI to run Vitests in the Continuous
						Integration Pipeline.
					</p>
					<p>
						I built this completely on my own for myself and other
						Javascrpt Engineers looking for a free tool to help them
						tailor their resume and save them precious time and
						energy.
					</p>
				</VideoGroup>
			</section>
			<section
				tabIndex={0}
				className={`project two`}
			>
				<Group
					id='portfolio'
					description={`
						My portfolio is designed with CSS3 features like container queries and performant animations. 
						I built this with a Node backend, React on the Server and on the Front End, and launched it on 
						Azure. It took me about a week for the initial version to complete this project, though I've gone 
						through several iterations now.
					`}
					imageFile='portfolio-mobile.png'
					imageAlt='mobile view of this web page'
					title='Portfolio: Node App'
					skills={portfolioSkills}
					githubLink='https://github.com/ryanAllMad/ryan-all-mad-portfolio'
					projectTitle='My portfolio'
				/>
			</section>
			<section className='project three'>
				<Group
					id='ally'
					title={`Moody's Speakeasy: Figma to Next App`}
					description={`
						I developed the application by creating a mood board, then a ux design, and then a prototype in Figma. Following that I built the Next.js app and deployed it to Vercel. The entire process took 2 days. The front end application features light and dark mode, CSS Transitions, and scroll animations. The app was built with NextJS, Typescript, React, and CSS3.
						`}
					imageAlt='desktop screen of darkly colored floral website design.'
					imageFile='moodies.png'
					skills={allySkills}
					projectLink='https://moodys-speakeasy.vercel.app/'
					githubLink='https://github.com/ryanAllMad/moodys-speakeasy'
					projectTitle={`Moody's Speakeasy`}
				/>
			</section>
			<section className='project four'>
				<Group
					id='blog'
					title={`Who Rep's Me?`}
					description={`
						This React Native App was developed with the use of 2 API's that provide Civic information from the US Government.
						This app allows users to find out who their Senators and House Rep's are, how to contact them, and learn what legislation
						they've sponsored. 
					`}
					imageAlt='mobile view of senator from MD with contact info and button to see sponsored bills.'
					imageFile='who-reps-me.png'
					skills={blogSkills}
					githubLink='https://github.com/ryanAllMad/who-reps-me/tree/main'
					projectTitle='Who Reps Me?'
				/>
			</section>
			<section className='project five'>
				<VideoGroup
					title='Vitest Accessibility Test Suite'
					skills={vitestSkills}
					githubLink='https://github.com/ryanAllMad/a11y-react'
					videoSrc='/a11y-vid.mp4'
				>
					<p>
						This project was built with Deque's React component
						library 'Cauldron', and Vite with Vitest.
					</p>
					<p>
						I built this completely on my own for myself and other
						React Engineers looking to build their React widgets
						with accessibility from test driven development.
					</p>
				</VideoGroup>
			</section>
			<section className='project six'>
				<Group
					id='dnd'
					title='DnD Character sheet NextJS App'
					description={`
						My DnD Character sheet was built with accessibility in mind and features screen 
						reader access to all features, keyboard access to all features, skip blocks for 
						easier screen reader navigation, user prefers reduced motion assist, and passes 
						color contrast minimums. This project was built with Next JS, Material UI, and published to Vercel.
					`}
					imageFile='yong-cell.png'
					imageAlt='mobile view of purple and grey dnd character sheet with female profile pic'
					skills={dndSkills}
					projectLink='https://yong-character-sheet.vercel.app/'
					githubLink='https://github.com/ryanAllMad/yong-character-sheet'
					projectTitle='DnD Character sheet'
				/>
			</section>
		</main>
	);
};

export default Main;
