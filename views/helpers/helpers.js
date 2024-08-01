export const triggerAnimations = (el, animationFrames, animationTiming) => {
	el.animate(animationFrames, animationTiming);
	el.classList.add('show');
};