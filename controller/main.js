const logoHead = document.querySelector('header .logo');
const group = document.querySelectorAll('.group')

const renderAboutTNode = (element) => {
	const elementClass = document.querySelector(element)
	if (elementClass) {
		elementClass.remove()
	}
	if(!elementClass) {
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
	}
};

const hideOnScroll = (el) => {
	const elementClass = document.querySelector(el)
	if (!elementClass) {
		return
	}
	elementClass.remove()
}
const enableButtons = (e) => {
	if (e.target.className !== 'group') {
		return
	}
	const id = e.target.getAttribute('id')
	console.log(id)
	const button = document.querySelectorAll(`#${id} .btn`)
	button.forEach((b) => {
		const tabIndex = b.getAttribute('tabIndex')
		if (tabIndex === '0') {
			return
		}
		b.setAttribute('tabIndex', '0')
		b.classList.add('isEnabled')
	})
}
const disableButtons = (e) => {
	if (e.target.className !== 'group') {
		return
	}
	const id = e.target.getAttribute('id')
	console.log(id)
	const button = document.querySelectorAll(`#${id} .btn`)
	button.forEach((b) => {
		const tabIndex = b.getAttribute('tabIndex')
			if(tabIndex !== '0') {
				return
			}
			b.onclick(e => e.preventDefault())
			b.setAttribute('tabIndex', '-1')
			b.classList.remove('isEnabled')
	})
}
logoHead.addEventListener('click', (event) => renderAboutTNode('header .logo .show-skills'))
window.addEventListener('scroll', (event) => hideOnScroll('header .logo .show-skills'))
//group.forEach((g) => g.addEventListener('mouseover', (e) => enableButtons(e)))
//group.forEach((g) => g.addEventListener('mouseleave', (e) => disableButtons(e)))
