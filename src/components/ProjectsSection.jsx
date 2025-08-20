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
		overflow: hidden;

		margin: 2rem;

		@media screen and (min-width: 930px) {
			height: auto;
		}
		@media screen and (min-width: 1024px) {
			height: auto;

			flex-grow: 1;
			column-gap: 2rem;
			row-gap: 0;
			align-items: center;
			overflow: hidden;
		}
		@media screen and (min-width: 1024px) and (max-height: 610px) {
			flex-grow: 0;
		}
	}

	.block {
		width: 18rem;
		height: 22rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		color: ${({ theme }) => theme.reverseFontColor};
		background-color: ${({ theme }) => theme.menuColor};

		border-radius: 15px;

		@media screen and (max-width: 622px) {
			width: clamp(18rem, 13.342rem + 24.84vw, 23rem);
		}

		img {
			width: auto;
			height: 30%;

			object-fit: cover;
		}
		h4 {
			width: 100%;
			height: auto;
			padding-top: 0.5rem;

			font-size: 1.5rem !important;
		}
		p {
			width: 100%;
			height: 40%;

			text-align: left;
			padding: 0.5rem 1rem;

			overflow-y: scroll;
			scrollbar-color: ${({ theme }) => theme.backgroundColor} ${({ theme }) => theme.menuColor};

			font-size: 1.125rem;
			font-weight: 500;

			flex-grow: 1;
		}
		div {
			width: 100%;
			height: 20%;

			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 7.5rem;
				height: 3rem;

				padding: 0.5rem;

				border-radius: 15px;
				border: none;
				cursor: pointer;

				background-color: ${({ theme }) => theme.backgroundColor};

				a {
					height: 100%;
					width: 100%;
					text-decoration: none;
					color: ${({ theme }) => theme.fontColor};

					font-weight: none;
					font-size: 0;
					span {
						white-space: nowrap;
						font-weight: 700;
						font-size: 1.25rem;
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
					<img src="astralLogo.png" alt="astralLogo" />
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
							<a href="https://github.com/Dauvnir?tab=repositories&q=&type=&language=&sort=name" target="_blank">
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
					<img src="logoprolabel.png" alt="comapnyLogo" />
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
