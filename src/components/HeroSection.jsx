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
		align-items: start;
		flex-wrap: wrap;

		text-align: center;
		#imgWrapper {
			margin-block: 0.5rem;
			width: 12rem;
			height: 12rem;

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

			flex-grow: 1;

			gap: 1rem;

			div {
				display: flex;
				gap: 2rem;
				button {
					width: 6rem;
					height: auto;

					border: none;
					outline: none;
					cursor: pointer;
					background: none;

					background-color: ${({ theme }) => theme.fontColor};

					border-radius: 15px;

					padding: 0.5rem;
					a {
						color: ${({ theme }) => theme.backgroundColor};

						text-decoration: none;
						white-space: nowrap;

						font-size: 1.25rem;
						font-weight: 700;
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
