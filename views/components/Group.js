import { useRef, useEffect } from 'react';
import ToProjectButtons from './ToProjectButtons.js';

const Group = (props) => {
	const {
		id,
		title,
		skills,
		description,
		projectLink,
		githubLink,
		projectTitle,
		imageFile,
		imageAlt
	} = props;
	const groupRef = useRef();

	const handleOnScroll = () => {
		const observe = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate')
				} else {
					entry.target.classList.remove('animate')
				}
			});
		});
		return observe.observe(groupRef.current);
	};

	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('scroll', handleOnScroll())
		}
	}, [window]);

	return (
		<div
			ref={groupRef}
			id={id}
			className="group"
			tabIndex={0}
		>
			<div className='bio'>
				<h3>{title}</h3>
				<p>{description}</p>
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
					/>
				</div>
			</div>
			<div className='pic-wrapper'>
				<img loading='lazy' src={`/images/${imageFile}`} alt={`${imageAlt}`} />
			</div>
		</div>
	);
};

export default Group;
