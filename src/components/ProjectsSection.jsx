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
			flex-grow: 1;

			column-gap: 0.5rem;
			row-gap: 0;
			align-items: center;
		}
	}

	.block {
		width: 18rem;
		height: 25rem;

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

			gap: 1rem;

			.secondBlock {
				width: 50%;
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

					padding: 0.5rem;
				}

				h4 {
					padding: 0;
				}

				div {
					padding-top: 0.25rem;
				}
			}
			img {
				width: 50%;
				height: 100%;

				border-radius: 15px 0 0 15px;
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
		<Wrapper className="section exclude">
			<h3>{isEngLang ? "My coding journey" : "Moja kodowa przygoda"}</h3>
			<h2>{isEngLang ? "Projects" : "Projekty"}</h2>
			<div id="track">
				<div className="block excludeFromFlow">
					<img src="manlaptop.jpg" alt="" />
					<h4>{isEngLang ? "Online library" : "Biblioteka online"}</h4>
					<p>
						{isEngLang
							? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at."
							: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at."}
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
					<h4>{isEngLang ? "Online library" : "Biblioteka online"}</h4>
					<p>
						{isEngLang
							? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at."
							: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at."}
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
					<h4>{isEngLang ? "Online library" : "Biblioteka online"}</h4>
					<p>
						{isEngLang
							? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at."
							: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Praesent facilisis tellus augue, vel mollis sapien eleifend eu. Ut congue ac libero et feugiat. Nunc et maximus tellus, non ornare tortor. Integer rutrum dignissim faucibus. Donec nec metus sit amet tortor dignissim pretium ut ut enim. Morbi rhoncus elit tellus, quis sagittis nunc egestas at."}
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
						<h4>{isEngLang ? "Online library" : "Biblioteka online"}</h4>
						<p>
							{isEngLang
								? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Curabitur id tempor sem. Curabitur in tellus maximus, "
								: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Curabitur id tempor sem. Curabitur in tellus maximus, "}
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
						<h4>{isEngLang ? "Online library" : "Biblioteka online"}</h4>
						<p>
							{isEngLang
								? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Curabitur id tempor sem. Curabitur in tellus maximus, "
								: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Curabitur id tempor sem. Curabitur in tellus maximus, "}
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
						<h4>{isEngLang ? "Online library" : "Biblioteka online"}</h4>
						<p>
							{isEngLang
								? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Curabitur id tempor sem. Curabitur in tellus maximus, "
								: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tempor sem. Curabitur in tellus maximus, ornare tortor a, rhoncus ligula. Curabitur id tempor sem. Curabitur in tellus maximus, "}
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
