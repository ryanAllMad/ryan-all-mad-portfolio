import { useEffect, useRef, useState } from 'react';
import ToProjectButtons from './ToProjectButtons.js';
import * as confetti from 'canvas-confetti';

const VideoGroup = ({title, children, skills, githubLink, videoSrc }) => {
	const vidRef = useRef()
	const bioRef = useRef()
	const [icon, setIcon] = useState('▶')
	const [clickMe, setClickMe] = useState('Click to Play');
	const playVid = (el) => {
		el.play();
		el.style.opacity = '1'
	};
	const pauseVid = (el) => {
		el.pause();
		el.style.opacity = '0.5'
	};

	const handleVidPlayState = () => {
		if (icon === '▶') {
			playVid(vidRef.current)
			setIcon('▣')
			setClickMe('Click to Stop');
			confetti.default();
		} else {
			pauseVid(vidRef.current)
			setIcon('▶')
			setClickMe('Click to Play');
		}
	}
	const handleOnScroll = () => {
		const observe = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
					if(entry.isIntersecting) {
						entry.target.classList.add('animate')
					} else {
						entry.target.classList.remove('animate')
					}
				})
		});
		return observe.observe(bioRef.current);
	};

	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('scroll', handleOnScroll())
		}
	}, [window]);
	return (
		<div className='video-group-wrappper'>
			<div ref={bioRef} className='bio'>
				<h3>{title}</h3>
				{children}
				<h4>Buil with:</h4>
				<ul>
					{skills.map((skill) => <li key={skill}>{skill}</li>)}
				</ul>
				<ToProjectButtons
					githubLink={githubLink}
				/>
				</div>
			<div className='video-box'>
			<video
				ref={vidRef}
				id='js-vid'
				loop
			>
				<source
					src={videoSrc}
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
			<div className='clickme'>
				<div class='btn'>
					<button aria-pressed={icon === '▣'} onClick={handleVidPlayState}><span className='click-icon'>{icon}</span>{clickMe}</button>
				</div>
			</div>
			</div>
		</div>
	)
}

export default VideoGroup