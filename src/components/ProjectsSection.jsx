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

		@media screen and (min-width: 930px) {
			height: auto;
		}
		@media screen and (min-width: 1024px) {
			height: auto;

			column-gap: 1rem;
			row-gap: 0;
			align-items: center;
			flex-wrap: nowrap;
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
		img {
			width: auto;
			height: 30%;
		}
		h4 {
			width: 100%;
			height: auto;
			padding-top: 0.5rem;

			font-size: 1.5rem !important; // to change
		}
		p {
			width: 100%;
			height: 40%;

			text-align: left;
			padding: 0.5rem 1rem;

			overflow: scroll;

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
				width: 7.5rem;
				height: 3rem;

				padding: 0.5rem;

				border-radius: 15px;
				border: none;
				cursor: pointer;

				color: ${({ theme }) => theme.fontColor};
				background-color: ${({ theme }) => theme.backgroundColor};

				span {
					white-space: nowrap;
					font-weight: 700;
					font-size: 1.25rem; // to change
				}
			}
		}
		//--------------------------------- 1024px change of apperance
		@media screen and (min-width: 1024px) {
			width: clamp(25rem, 7.857rem + 26.79vw, 40rem);
			height: clamp(15rem, 4.714rem + 16.07vw, 24rem);

			flex-direction: row;

			gap: .25rem;

			.secondBlock {
				width: 60%;
				height: 100%;

				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				gap: 0;

				padding: 0.25rem;
				p {
					width: 100%;
					height: auto;
					flex-grow: 1;
					/* padding: 0.5rem 0; */
					padding: 0;

					font-size: 1rem !important;
				}

				h4 {
					padding: 0;
				}

				div {
					padding-block: .25rem;

					flex-shrink: 0;

					overflow: hidden;

					button{
						height: 100%;

						padding: 0.25rem;
					}
				}
			}
			img {
				width: 40%;
				height: 100%;

				object-fit: contain;

				border-radius: 15px 0 0 15px;

				background-color: rebeccapurple;
			}
		}
	}

	.excludeFromFlow {
		@media screen and (max-width: 1023px) {
			display: flex;
		}
		@media screen and (min-width: 1024px) {
			display: none;
		}
	}
	.includeInFlow {
		@media screen and (max-width: 1023px) {
			display: none;
		}
		@media screen and (min-width: 1024px) {
			display: flex;
		}
	}
`;

const ProjectsSection = ({ isEngLang }) => {
	return (
		<Wrapper className="section exclude" id="projectSection">
			<h3>{isEngLang ? "My coding journey" : "Moja kodowa przygoda"}</h3>
			<h2>{isEngLang ? "Projects" : "Projekty"}</h2>
			<div id="track">
				<div className="block excludeFromFlow">
					<img src="manlaptop.jpg" alt="" />
					<h4>{isEngLang ? "Library & API" : "Biblioteka i API"}</h4>
					<p>
						{isEngLang?
						"An online library that tracks real-time updates from other websites. Includes a personal collection feature and the ability to create an account, powered by a custom-built Node.js server."
							: "Biblioteka online śledząca w czasie rzeczywistym aktualizacje z innych stron internetowych. Zawiera funkcję osobistej kolekcji oraz możliwość tworzenia konta, dzięki własnoręcznie stworzonemu serwerowi Node.js."}
					</p>
					<div>
						<button>
							<span>{isEngLang ? "Try it" : "Sprawdź"}</span>
						</button>
						<button>
							<span>GitHub</span>
						</button>
					</div>
				</div>
				<div className="block excludeFromFlow">
					<img src="manlaptop.jpg" alt="" />
					<h4>{isEngLang ? "JS Mario game" : "JS gra Mario"}</h4>
					<p>
						{isEngLang
							? "A handmade first level recreation of the popular Mario game. Built using HTML Canvas and game logic implemented with the Kaboom library to replicate the original gameplay. Works on mobile devices (excluding iPhones with Safari)."
							: "Ręcznie stworzona pierwsza plansza popularnej gry z Mario. Zbudowana z użyciem HTML Canvas oraz logiki gry za pomocą biblioteki Kaboom, aby odwzorować oryginalną rozgrywkę. Działa na urządzeniach mobilnych (z wyjątkiem iPhone z Safari)"}					</p>
					<div>
						<button>
							<span>{isEngLang ? "Try it" : "Sprawdź"}</span>
						</button>
						<button>
							<span>GitHub</span>
						</button>
					</div>
				</div>
				<div className="block excludeFromFlow">
					<img src="manlaptop.jpg" alt="" />
					<h4>{isEngLang ? "Company page" : "Strona firmowa"}</h4>
					<p>
						{isEngLang
							? "A company website I developed while working there, built using React and styled-components. I designed and implemented a unique web experience for a printing company specializing in plotter printing and custom stickers."
							: "Strona internetowa firmy, którą stworzyłem podczas pracy w tej firmie, zbudowana przy użyciu Reacta oraz biblioteki styled-components. Zaprojektowałem i wdrożyłem unikalną stronę dla firmy zajmującej się drukiem ploterowym i sprzedażą naklejek."}
					</p>
					<div>
						<button>
							<span>{isEngLang ? "Try it" : "Sprawdź"}</span>
						</button>
						<button>
							<span>GitHub</span>
						</button>
					</div>
				</div>
				<div className="block includeInFlow">
					<img src="manlaptop.jpg" alt="" />
					<div className="secondBlock">
						<h4>{isEngLang ? "Library & API" : "Biblioteka i API"}</h4>
						<p>
							{isEngLang?
						"An online library that tracks real-time updates from other websites. Includes a personal collection feature and the ability to create an account, powered by a custom-built Node.js server."
							: "Biblioteka online śledząca w czasie rzeczywistym aktualizacje z innych stron internetowych. Zawiera funkcję osobistej kolekcji oraz możliwość tworzenia konta, dzięki własnoręcznie stworzonemu serwerowi Node.js."}
					</p>
						<div>
							<button>
								<span>{isEngLang ? "Try it" : "Sprawdź"}</span>
							</button>
							<button>
								<span>GitHub</span>
							</button>
						</div>
					</div>
				</div>
				<div className="block includeInFlow">
					<img src="manlaptop.jpg" alt="" />
					<div className="secondBlock">
						<h4>{isEngLang ? "JS Mario game" : "JS gra Mario"}</h4>
						<p>
							{isEngLang
							? "A handmade first level recreation of the popular Mario game. Built using HTML Canvas and game logic implemented with the Kaboom library to replicate the original gameplay. Works on mobile devices (excluding iPhones with Safari)."
							: "Ręcznie stworzona pierwsza plansza popularnej gry z Mario. Zbudowana z użyciem HTML Canvas oraz logiki gry za pomocą biblioteki Kaboom, aby odwzorować oryginalną rozgrywkę. Działa na urządzeniach mobilnych (z wyjątkiem iPhone z Safari)"}					</p>

						<div>
							<button>
								<span>{isEngLang ? "Try it" : "Sprawdź"}</span>
							</button>
							<button>
								<span>GitHub</span>
							</button>
						</div>
					</div>
				</div>
				<div className="block includeInFlow">
					<img src="manlaptop.jpg" alt="" />
					<div className="secondBlock">
						<h4>{isEngLang ? "Company page" : "Strona firmowa"}</h4>
						<p>
							{isEngLang
							? "A company website I developed while working there, built using React and styled-components. I designed and implemented a unique web experience for a printing company specializing in plotter printing and custom stickers."
							: "Strona internetowa firmy, którą stworzyłem podczas pracy w tej firmie, zbudowana przy użyciu Reacta oraz biblioteki styled-components. Zaprojektowałem i wdrożyłem unikalną stronę dla firmy zajmującej się drukiem ploterowym i sprzedażą naklejek."}
					</p>
						<div>
							<button>
								<span>{isEngLang ? "Try it" : "Sprawdź"}</span>
							</button>
							<button>
								<span>GitHub</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProjectsSection;
