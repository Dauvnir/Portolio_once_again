import styled from "styled-components";
import AnimatedHeader from "./AnimatedHeader";

const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	color: ${({ theme }) => theme.fontColor};
	#wrapper {
		width: 100%;
		height: auto;

		flex-grow: 1;
		flex-shrink: 0;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		text-align: center;

		@media screen and (min-width: 504px) {
			gap: clamp(0.5rem, -1.885rem + 7.63vw, 3rem);
		}
		@media screen and (min-width: 1024px) {
			height: 70%;
			flex-grow: 0;
		}

		#imgWrapper {
			width: clamp(11rem, 8.375rem + 14vw, 25rem);
			height: clamp(11rem, 8.375rem + 14vw, 25rem);

			border-radius: 50%;
			background-color: white;

			overflow: hidden;
			img {
				height: 100%;
				width: auto;

				object-fit: contain;
			}
		}

		#descriptionWrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			width: fit-content;
			height: auto;

			@media screen and (min-width: 504px) {
				gap: clamp(0.5rem, -0.931rem + 4.58vw, 2rem);
			}
			div {
				display: flex;
				gap: 2rem;
				button {
					width: clamp(7rem, 5.343rem + 8.84vw, 11rem);
					height: auto;

					border: none;
					outline: none;
					cursor: pointer;
					background: none;

					background-color: ${({ theme }) => theme.fontColor};
					border: 3px solid ${({ theme }) => theme.fontColor};
					border-radius: 15px;

					padding-block: 0.75rem;
					padding-inline: clamp(0.5rem, 0.361rem + 0.74vw, 1.25rem);

					will-change: background-color;
					transition: background-color 0.5s ease;
					&:hover {
						background-color: ${({ theme }) => theme.backgroundColor};
						a {
							color: ${({ theme }) => theme.fontColor};
						}
					}
					a {
						color: ${({ theme }) => theme.backgroundColor};

						text-decoration: none;
						white-space: nowrap;

						transition: color 0.5s ease;
						will-change: color;
					}
				}
			}
		}
	}
`;

const HeroSection = ({ isEngLang }) => {
	return (
		<Section className="section">
			<AnimatedHeader isEngLang={isEngLang} />
			<div id="wrapper">
				<div id="imgWrapper">
					<img src="avatar.png" alt="image" />
				</div>
				<div id="descriptionWrapper">
					<h2>
						{isEngLang ? "Hello, I'm" : "Cześć, jestem"} <br />
						<strong>Patryk Polak</strong> <br />
						Frontend Developer
					</h2>
					<div>
						<button>
							<a href="#">{isEngLang ? "Contact" : "Kontakt"}</a>
						</button>
						<button>
							<a href="#">{isEngLang ? "My CV" : "Moje CV"}</a>
						</button>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default HeroSection;
