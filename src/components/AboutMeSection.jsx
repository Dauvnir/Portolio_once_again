import styled from "styled-components";

const Wrapper = styled.section`
	color: ${({ theme }) => theme.fontColor};
	text-align: center;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		border-radius: 25px;

		padding: 1rem;
		gap: 1rem;
		margin-inline: auto;

		color: ${({ theme }) => theme.reverseFontColor};
		background-color: ${({ theme }) => theme.menuColor};

		width: clamp(18rem, 4.722rem + 70.82vw, 50rem);
		height: 25rem;

		p {
			width: 100%;
			flex-grow: 1;

			text-align: left;
			overflow: scroll;
		}

		img {
			border-radius: 25px;
			width: auto;
			height: clamp(12rem, 9.514rem + 13.26vw, 18rem);
			background-color: purple;
		}

		@media screen and (min-width: 1024px) {
			flex-direction: row;

			padding: 2rem;
			gap: 2rem;
			margin-top: 2rem;

			width: clamp(50rem, 32.857rem + 26.79vw, 65rem);
			height: clamp(22rem, 8.286rem + 21.43vw, 34rem);

			p {
				height: 100%;
				overflow: scroll;
			}

			img {
				border-radius: 25px;
				height: clamp(18rem, 4.286rem + 21.43vw, 30rem);
				width: clamp(13rem, -0.714rem + 21.43vw, 25rem);
				background-color: purple;
			}
		}
	}
`;

const AboutMe = ({ isEngLang }) => {
	return (
		<Wrapper className="section">
			<h3>{isEngLang ? "Get to know me more" : "Poznaj mnie lepiej"}</h3>
			<h2>{isEngLang ? "About me" : "O mnie"}</h2>
			<div id="container">
				<img src="" alt="" />
				<p>
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula imperdiet erat, in euismod mauris efficitur varius. Integer tempor
					nec felis vel consequat. Mauris egestas imperdiet ligula, et imperdiet lectus ornare at. Maecenas sit amet neque odio. Cras ullamcorper
					cursus nulla sed euismod. In rutrum vestibulum neque eget feugiatLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula
					imperdiet erat, in euismod mauris efficitur varius. Integer tempor nec felis vel consequat. Mauris egestas imperdiet ligula, et imperdiet
					lectus ornare at. ',
				</p>
			</div>
		</Wrapper>
	);
};

export default AboutMe;
