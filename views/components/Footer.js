import Contact from './Contact.js';

const Footer = () => {
	return (
		<footer>
			<Contact />
			<aside style={{ fontSize: '12px' }}>
				Images By LinkedIn -{' '}
				<a
					rel='nofollow'
					href='https://developer.linkedin.com/documents/branding-guidelines'
				>
					{' '}
					https://developer.linkedin.com/documents/branding-guidelines{' '}⍈
				</a>{' '}
				Public Domain,{' '}
				<a href='https://commons.wikimedia.org/w/index.php?curid=30784763'>
					Link ⍈
				</a>
			</aside>
		</footer>
	);
};

export default Footer
