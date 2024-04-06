import Contact from './components/Contact.js';
import Group from './components/Group.js'

export default function GoalsPage() {
	const portfolioSkills = [
		'Node',
		'React as a template engine',
		'Webpack',
		'Vanilla JS',
		'CSS'
	]
	return (
		<>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin="anonymous"
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href='/styles.css'
				></link>
				<script type='text/javascript' src='/js/index.js' async defer />
			</head>
			<body>
				<header className='desktop-hidden'>
					<section className='logo'></section>
					<Contact />
				</header>
				<main>
					<section className='mobile-hidden logo'></section>
					<section className='project one'>
						<Group title="Portfolio" skills={portfolioSkills} />
					</section>
					<section className='project two'>
						<Group title="DnD Character sheet" skills={portfolioSkills} />
					</section>
					<section className='project three'>
						<Group title="A11y Check Plugin" skills={portfolioSkills} />
					</section>
					<section className='project four'>
					<Group title="Vite-React-Redux List" skills={portfolioSkills} />
					</section>
				</main>
				<footer>
					<Contact />
					<aside style={{fontSize: '12px'}}>
					Images By LinkedIn -  <a rel="nofollow" href="https://developer.linkedin.com/documents/branding-guidelines"> https://developer.linkedin.com/documents/branding-guidelines </a> Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=30784763">Link</a>
					</aside>
				</footer>
			</body>
		</>
	);
}
