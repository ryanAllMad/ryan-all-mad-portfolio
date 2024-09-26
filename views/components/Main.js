import { useEffect, useState } from 'react';
import Group from './Group.js';
import VideoGroup from './VideoGroup.js';
import CrossOffLink from './CrossOffLink.js';
import '../../assets/images/js-job-helper.mp4';
import '../../assets/images/a11y-vid.mp4';


const Main = () => {
	const [mePic, setMePic] = useState('me-smile.png')
	const [eatDrink, setEatDrink] = useState('748px')

	const portfolioSkills = ['Node', 'Express', 'React', 'CSS3', 'Azure'];
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
		'Technical Writing',
		'Mentoring',
		'Front end',
		'Javascript',
		'SEO',
		'CWV'
	];
	const jobHelperSkills = ['MongoDB', 'Express', 'React', 'Node', 'CSS3', 'Vite', 'CI/CD', 'CircleCI', 'Vitest'];
	const vitestSkills = ['Vite', 'React', 'WCAG', 'Vitest', 'CI/CD', 'CircleCI'];

	useEffect(() => {
		if (typeof window !== undefined) {
			if(window.innerWidth > 999) {
				window.addEventListener('scroll', () => {
					const scrollVal = window.scrollY
					const newVal = 748 - scrollVal
					const windowPercentageScrolled = Math.round((scrollVal / window.innerHeight) * 100)
					if(windowPercentageScrolled >= 20) {
						setMePic('me-oop.png')
					} else {
						setMePic('me-smile.png')
					}
					if(newVal >= 0) {
						setEatDrink(`${newVal}px`)
					}
				})
			}
			if(window.innerWidth <= 999) {
				setEatDrink(`300px`)
				window.addEventListener('scroll', () => {
					const scrollVal = window.scrollY
					const newMobileVal = 300 - scrollVal
					const mobilePercentageScrolled = Math.round((scrollVal / window.innerHeight) * 100)
					if(newMobileVal >= 0) {
						setEatDrink(`${newMobileVal}px`)
					}
					if(mobilePercentageScrolled >= 1) {
						setMePic('me-oop.png')
					} else {
						setMePic('me-smile.png')
					}
				})
				
				
			}
		}
	}, [window]);
	return (
		<main>
			<section className='project me'>
				<div className='profile img' style={{width: eatDrink}}>
					<img loading='eager' alt="white woman, red hair, smiling." src={`/images/${mePic}`} />
				</div>
				<div className='bio'>
					<h1>Ryan Duer: Software Engineer</h1>
					<p>
						Hey! Thanks for stopping by! I've gathered together my most complete
						and recent work for you to check out! 
					</p>
					<p>
						I'm a Software Engineer, with a long background in Support Engineering. 
						I develop with a core focus on user experience and have a wealth of hands-on experience 
						understanding user needs. I pride myself on my collaborative 
						and positive spirit and am always working to better myself and help those around me.
					</p>
					<p>
						Feel free to check me out 
						<CrossOffLink href="https://www.linkedin.com/in/ryan-duer" dataText="on LinkedIn" />
						Don't forget to take a look at some of my relevant skills in the header menu or the footer!
					</p>
					
					<h2>Top Skills</h2>
					<ul>
						<li>React</li>
						<li>Typescript</li>
						<li>Javascript</li>
						<li>WCAG</li>
						<li>CSS3</li>
						<li>Cross team collab</li>
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
					title="JS Job Helper: Node App"
					skills={jobHelperSkills}
					githubLink="https://github.com/ryanAllMad/js-job-helper"
					videoSrc='/js-job-helper.mp4'
				>
					<p>
						This project was built with a MERN stack using Node, Express, Mongoose, MongoDB, 
						React, Vite, Vitest, CSS3, and uses CircleCI to run Vitests in the Continuous 
						Integration Pipeline.
					</p>
					<p>
						I built this completely on my own for myself and other Javascrpt Engineers looking 
						for a free tool to help them tailor their resume and save them precious time and energy.
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
					imageFile="portfolio-mobile.png"
					imageAlt="mobile view of this web page"
					title='Portfolio: Node App'
					skills={portfolioSkills}
					githubLink='https://github.com/ryanAllMad/ryan-all-mad-portfolio'
					projectTitle='My portfolio'
				/>
			</section>
			<section
				className='project three'
			>
				<Group
					id='dnd'
					title='DnD Character sheet NextJS App'
					description={`
						My DnD Character sheet was built with accessibility in mind and features screen 
						reader access to all features, keyboard access to all features, skip blocks for 
						easier screen reader navigation, user prefers reduced motion assist, and passes 
						color contrast minimums. This project was built with Next JS, Material UI, and published to Vercel.
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
				<VideoGroup
					title="Vitest Accessibility Test Suite"
					skills={vitestSkills}
					githubLink="https://github.com/ryanAllMad/a11y-react"
					videoSrc="/a11y-vid.mp4"
				>
				<p>
					This project was built with Deque's React component library 'Cauldron', 
					and Vite with Vitest.
				</p>
				<p>
					I built this completely on my own for myself and other React Engineers 
					looking to build their React widgets with accessibility from test driven development.
				</p>
				</VideoGroup>
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
						My blog is where I use my passion for helping others, and educating 
						engineers to resolve issues related to front end, Javascript, WordPress, 
						or Accessibility Engineering. 
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
