import Head from './components/Head.js';
import Contact from './components/Contact.js';
//import BodyContent from './components/BodyContent.js';
//import { lazy, Suspense } from 'react';

//const BodyContent = lazy(() => import('./components/BodyContent.js'))


export default function GoalsPage() {
	return (
		<>
			<html lang="en">
				<Head />
				<body>
					<header className='desktop-hidden'>
						<section className='logo'></section>
						<Contact />
					</header>
					<main id="root">
					</main>
					<footer>
						<Contact />
						<aside style={{fontSize: '12px'}}>
						Images By LinkedIn -  <a rel="nofollow" href="https://developer.linkedin.com/documents/branding-guidelines"> https://developer.linkedin.com/documents/branding-guidelines </a> Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=30784763">Link</a>
						</aside>
					</footer>
				</body>
			</html>
		</>
	);
}
