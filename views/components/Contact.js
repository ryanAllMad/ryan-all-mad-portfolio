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
					JavaScript | React Typescript | Redux | Node | SCSS/CSS |
					PHP | WCAG | NPM | CircleCI | WordPress | Gutenberg
				</p>
			</section>
			<section className="contact third">
				<h2 className="header-hide">Contact</h2>
				<p>
					<a
						href='https://www.linkedin.com/in/ryan-duer/'
						target='_blank'
					>
						<img src="/images/LinkedIn.png" alt="to github profile" />
					</a>
				</p>
				<p>
					<a
						href='https://github.com/ryanAllMad'
						target='_blank'
					>
						<img src="/images/github-mark.png" alt="to github profile" />
					</a>
				</p>
			</section>
		</>
	);
};
export default Contact;
