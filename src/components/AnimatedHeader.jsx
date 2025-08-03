import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const blinkingCursor = (color) => keyframes`
  0% {border-color: ${color};}
  50% {border-color:   transparent;}
  100% { border-color: ${color};}
 `;

const typingAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
 `;

const borderFadeOut = keyframes`
  to {
    border-right-color: transparent;
  }
`;

const borderFadeIn = (colorFont) => keyframes`
  from {
    border-right-color:  transparent;
  }
  to{
    border-right-color:  ${colorFont};
  }
`;

const Header = styled.h1`
	color: ${({ theme }) => theme.fontColor};
	text-align: center;

	flex-shrink: 1;

	white-space: nowrap;
	span {
		font-size: inherit !important;
		font-weight: inherit;
	}

	//animate header if more than 1024px
	@media screen and (min-width: 1024px) {
		display: inline-block;

		white-space: nowrap;
		overflow: hidden;

		width: 0;
		max-width: max-content;

		border-right: 4px solid ${({ theme }) => theme.fontColor};

		animation:
			${typingAnimation} 4s steps(${({ bool }) => (bool ? 29 : 26)}) forwards 0.5s,
			${({ theme }) => blinkingCursor(theme.fontColor)} 0.75s step-end infinite 4.5s;
	}

	//animate header if less than 1023px
	@media screen and (max-width: 1023px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex-wrap: wrap;

		span {
			overflow: hidden;
			width: 0;
			max-width: max-content;

			&:first-child {
				border-right: 4px solid ${({ theme }) => theme.fontColor};
				animation:
					${typingAnimation} 1s steps(${({ bool }) => (bool ? 11 : 11)}) forwards,
					${({ theme }) => blinkingCursor(theme.fontColor)} 0.5s steps(1) infinite 1s,
					${borderFadeOut} 0.1s forwards 1s;
			}
			&:last-child {
				border-right: 4px solid ${({ theme }) => theme.reverseFontColor};
				animation:
					${({ theme }) => borderFadeIn(theme.fontColor)} 0.1s forwards 1s,
					${typingAnimation} 1.5s steps(${({ bool }) => (bool ? 18 : 14)}) forwards 1s,
					${({ theme }) => blinkingCursor(theme.fontColor)} 2s steps(1) infinite 2.5s;
			}
		}
	}
`;

const AnimatedHeader = ({ isEngLang }) => {
	const textPl = ["Pokodujmy i pracujmy razem", "Pokodujmy i ", "pracujmy razem"];
	const textEng = ["Let us code and work together", "Let us code ", "and work together"];

	const [width, setWidth] = useState(null);

	useEffect(() => {
		const innerWidth = window.innerWidth;

		const handler = () => {
			setWidth(innerWidth);
		};

		addEventListener("resize", handler);

		return () => {
			removeEventListener("resize", handler);
		};
	}, [innerWidth]);

	return (
		<Header>
			{isEngLang ? (
				width > 1024 ? (
					<span>{textEng[0]}</span>
				) : (
					<>
						<span>{textEng[1]}</span>
						<span>{textEng[2]}</span>
					</>
				)
			) : width > 1024 ? (
				<span>{textPl[0]}</span>
			) : (
				<>
					<span>{textPl[1]}</span>
					<span>{textPl[2]}</span>
				</>
			)}
		</Header>
	);
};

export default AnimatedHeader;
