import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	text-align: center;
	color: ${({ theme }) => theme.fontColor};

	#track {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;

		width: 100%;
		height: 100%;
		@media screen and (min-height: 610px) and (min-width: 1024px) {
			max-height: 35rem;
		}

		overflow: hidden;
		column-gap: 2rem;
		row-gap: 2rem;
	}

	.block {
		width: 100%;
		max-width: 18rem;
		height: 22rem;
		@media screen and (min-width: 1024px) {
			width: 30%;
			max-width: 35rem;
		}
		@media screen and (min-height: 610px) and (min-width: 1024px) {
			height: 90%;
			max-height: 35rem;
		}

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		color: ${({ theme }) => theme.reverseFontColor};
		background-color: ${({ theme }) => theme.menuColor};

		border-radius: 15px;

		img {
			width: auto;
			height: 30%;
			flex-grow: 1;
			object-fit: contain;
			padding: 0.5rem 1rem;
		}
		#imgCompany {
			content: url(${({ theme }) => theme.logo.prolabel});
		}
		h4 {
			width: 100%;
			height: auto;
			padding-top: 0.5rem;

			font-size: 1.5rem !important;
			@media screen and (min-width: 1024px) {
				font-size: 2.2rem !important;
			}
		}
		p {
			width: 100%;
			height: 35%;

			text-align: left;
			padding: 0.5rem 1rem;

			overflow-y: auto;
			scrollbar-color: ${({ theme }) => theme.backgroundColor} ${({ theme }) => theme.menuColor};

			font-size: 1.125rem;
			font-weight: 500;
			@media screen and (min-width: 1024px) {
				font-size: 1.35rem;
			}
		}
		div {
			width: 100%;
			height: 20%;

			display: flex;
			justify-content: space-evenly;
			align-items: center;
			button {
				width: 40%;
				max-width: 10rem;
				height: 70%;
				max-height: 4rem;

				border-radius: 15px;
				border: none;
				cursor: pointer;

				border: 3px solid ${({ theme }) => theme.reverseFontColor};
				background-color: ${({ theme }) => theme.backgroundColor};
				will-change: background-color;
				transition: background-color 0.5s ease;
				&:hover {
					background-color: ${({ theme }) => theme.menuColor};
					a {
						color: ${({ theme }) => theme.reverseFontColor};
					}
				}
				a {
					display: flex;
					justify-content: center;
					align-items: center;

					height: 100%;
					width: 100%;
					text-decoration: none;
					color: ${({ theme }) => theme.fontColor};

					font-weight: 500;
					font-size: 0;

					span {
						white-space: nowrap;
						font-weight: 700;
						font-size: 1.25rem;
						@media screen and (min-width: 1024px) {
							font-size: 1.5rem;
						}
					}
				}
			}
		}
	}
`;

const ProjectsSection = ({ isEngLang }) => {
	return (
		<Wrapper className="section exclude" id="projectSection">
			<h3>{isEngLang ? "My coding journey" : "Moja programowa przygoda"}</h3>
			<h2>{isEngLang ? "Projects" : "Projekty"}</h2>
			<div id="track">
				<div className="block">
					<h4>{isEngLang ? "Library & API" : "Biblioteka i API"}</h4>
					<img src="Astral-logo.png" alt="astralLogo" />
					<p>
						{isEngLang
							? "An online library that tracks real-time updates from other websites. Includes a personal collection feature and the ability to create an account, powered by a custom-built Node.js server."
							: "Biblioteka online śledząca w czasie rzeczywistym aktualizacje z innych stron internetowych. Zawiera funkcję osobistej kolekcji oraz możliwość tworzenia konta, dzięki własnoręcznie stworzonemu serwerowi Node.js."}
					</p>
					<div>
						<button>
							<a href="https://astral.patryk-polak.pl" target="_blank">
								<span>{isEngLang ? "Try it" : "Sprawdź"}</span>
							</a>
						</button>
						<button>
							<a href="https://github.com/Dauvnir/Project_Astral_Backend" target="_blank">
								<span>GitHub</span>
							</a>
						</button>
					</div>
				</div>
				<div className="block">
					<h4>{isEngLang ? "JS Mario game" : "JS gra Mario"}</h4>
					<img src="mario-logo.png" alt="marioGameLogo" />

					<p>
						{isEngLang
							? "A handmade first level recreation of the popular Mario game. Built using HTML Canvas and game logic implemented with the Kaboom library to replicate the original gameplay. Works on mobile devices (excluding iPhones with Safari)."
							: "Ręcznie stworzona pierwsza plansza popularnej gry z Mario. Zbudowana z użyciem HTML Canvas oraz logiki gry za pomocą biblioteki Kaboom, aby odwzorować oryginalną rozgrywkę. Działa na urządzeniach mobilnych (z wyjątkiem iPhone z Safari)"}{" "}
					</p>
					<div>
						<button>
							<a href="https://mario.patryk-polak.pl" target="_blank">
								<span>{isEngLang ? "Try it" : "Sprawdź"}</span>
							</a>
						</button>
						<button>
							<a href="https://github.com/Dauvnir/MarioPortfolio" target="_blank">
								<span>GitHub</span>
							</a>
						</button>
					</div>
				</div>
				<div className="block">
					<h4>{isEngLang ? "Company page" : "Strona firmowa"}</h4>
					<img alt="comapnyLogo" id="imgCompany" />
					<p>
						{isEngLang
							? "A company website I developed while working there, built using React and styled-components. I designed and implemented a unique web experience for a printing company specializing in plotter printing and custom stickers."
							: "Strona internetowa firmy, którą stworzyłem podczas pracy w tej firmie, zbudowana przy użyciu Reacta oraz biblioteki styled-components. Zaprojektowałem i wdrożyłem unikalną stronę dla firmy zajmującej się drukiem ploterowym i sprzedażą naklejek."}
					</p>
					<div>
						<button>
							<a href="https://prolabel.patryk-polak.pl" target="_blank">
								<span>{isEngLang ? "Try it" : "Sprawdź"}</span>
							</a>
						</button>
						<button>
							<a href="https://github.com/Dauvnir/Company_landing_page" target="_blank">
								<span>GitHub</span>
							</a>
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProjectsSection;
