import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: auto;

	opacity: 0;
	transition: opacity 1s ease-out;
	will-change: opacity;

	&.visible {
		opacity: 1;
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
