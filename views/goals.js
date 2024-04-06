import Contact from './components/Contact.js';

export default function GoalsPage() {
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
			</head>
			<body>
				<header className='desktop-hidden'>
					<section className='logo'></section>
					<Contact />
				</header>
				<main>
					<section className='mobile-hidden logo'></section>
					<section className='project one'>
						<img src='/dummy.jpg' alt="dummy image" />
					</section>
					<section className='project two'>
						<img src='/dummy.jpg' alt="dummy image" />
					</section>
					<section className='project three'>
						<img src='/dummy.jpg' alt="dummy image" />
					</section>
					<section className='project four'>
					<img src='/dummy.jpg' alt="dummy image" />
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
