import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	opacity: 0;
	transform: translateY(5rem);
	transition:
		opacity 0.6s ease-out,
		transform 0.6s ease-out;
	will-change: opacity, transform;

	&.visible {
		opacity: 1;
		transform: translateY(0);
	}
`;

const AnimateSections = ({ children }) => {
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.15 }
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return <Wrapper ref={ref}>{children}</Wrapper>;
};

export default AnimateSections;
