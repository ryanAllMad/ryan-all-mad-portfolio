import { useRef, useState, useEffect } from 'react';
import ToProjectButtons from './ToProjectButtons.js';

const Group = (props) => {
	const {
		id,
		title,
		skills,
		projectLink,
		githubLink,
		projectTitle,
		tooltipTitle,
	} = props;
	const groupRef = useRef();
	const [clipClass, setClipClass] = useState('');

	const handleMouseOver = () => {
		setClipClass('polygon');
	};
	const handleOnScroll = () => {
		const observe = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setClipClass('polygon');
				}
			});
		});
		return observe.observe(groupRef.current);
	};

	useEffect(() => {
		if (typeof window !== undefined) {
			if (window.innerWidth <= 800) {
				handleOnScroll();
			}
		}
	}, [window]);

	return (
		<div
			ref={groupRef}
			onFocus={handleMouseOver}
			onMouseOver={handleMouseOver}
			id={id}
			className={`group ${clipClass}`}
			tabIndex={0}
		>
			<h2>{title}</h2>
			<p>Built with:</p>
			<ul>
				{skills.map((sk) => (
					<li key={sk.toLowerCase()}>{sk}</li>
				))}
			</ul>
			<div className='buttons'>
				<ToProjectButtons
					githubLink={githubLink}
					projectLink={projectLink}
					projectTitle={projectTitle}
					tooltipTitle={tooltipTitle}
				/>
			</div>
		</div>
	);
};

export default Group;
