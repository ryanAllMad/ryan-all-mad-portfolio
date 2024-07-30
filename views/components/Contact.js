const Contact = () => {
	return (
		<>
			<section className="contact first">
				<h1>Software Engineer</h1>
				
				<p className="header-hide">2 Years Experience</p>
			</section>
			<section className="contact second">
			<h2 className="header-hide">Skills</h2>
				<p className="header-hide">
					JavaScript | React | Typescript | Redux | Node | SCSS/CSS |
					PHP | WCAG | NPM | CircleCI | WordPress | Gutenberg <br />
					<a
					href='https://codepen.io/all-mad-designs'
					target='_blank'
				>
					See my CSS portfolio here
				</a>
				</p>
			</section>
			<section className="contact third">
				<h2 className="header-hide">Contact</h2>
				<p>
					<a
						href='https://www.linkedin.com/in/ryan-duer/'
						target='_blank'
					>
						<img loading="lazy" width="40" height="40" src="/images/LinkedIn.png" alt="to linked in profile" />
					</a>
				</p>
				<p>
					<a
						href='https://github.com/ryanAllMad'
						target='_blank'
					>
						<img loading="lazy" width="40" height="40" src="/images/github-mark.png" alt="to github profile" />
					</a>
				</p>
			</section>
		</>
	);
};
export default Contact;
