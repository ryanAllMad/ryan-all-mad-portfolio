const logoHead = document.querySelector('header .logo');

const renderAboutTNode = () => {
	const skillsArr = [
		`JavaScript`,
		`React`,
		`Typescript`,
		`Redux `,
		`Node `,
		`SCSS/CSS`,
		`PHP`,
		`WCAG`,
		`NPM`,
		`CircleCI`,
		`WordPress`,
		`Gutenberg`,
	];
	const skillList = document.createElement('ul')
	const aboutDropdown = document.createElement('div');
	const heading = document.createElement('h2')
	const headingText = document.createTextNode('Skills')
	skillsArr.forEach((sk) => {
		const list = document.createElement('li')
		const listText = document.createTextNode(sk)
		list.appendChild(listText)
		skillList.appendChild(list)
	})
	
	aboutDropdown.className = 'show-skills';
	heading.appendChild(headingText)
	aboutDropdown.appendChild(heading)
	aboutDropdown.appendChild(skillList)
	logoHead.insertAdjacentElement('beforeend', aboutDropdown)
};

const hideOnScroll = (el) => {
	const elementClass = document.querySelector(el)
	if (!elementClass) {
		return
	}
	elementClass.remove()
}

logoHead.addEventListener('click', renderAboutTNode);
window.addEventListener('scroll', (event) => hideOnScroll('header .logo .show-skills'))
