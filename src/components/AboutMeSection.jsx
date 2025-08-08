import styled from "styled-components";

const Wrapper = styled.section`
	color: ${({ theme }) => theme.fontColor};
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	#wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		border-radius: 25px;

		padding: 1rem;
		margin-inline: auto;
		margin-top: 1rem;

		gap: 1rem;

		overflow: hidden;

		color: ${({ theme }) => theme.reverseFontColor};
		background-color: ${({ theme }) => theme.menuColor};

		width: clamp(16rem, 1.912rem + 75.14vw, 50rem);
		height: 25rem;

		@media screen and (min-width: 1024px) {
			height: 30rem;
		}

		@media screen and (min-width: 600px) {
			flex-direction: row;
		}

		#imgWrap {
			width: 100%;
			height: 55%;

			@media screen and (min-width: 600px) {
				width: 45%;
				height: 100%;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
		#aboutMe {
			width: 100%;
			height: 45%;

			overflow: scroll;
			text-align: left;

			@media screen and (min-width: 600px) {
				width: 55%;
				height: 100%;
			}

			p {
				width: 100%;
				height: 100%;

				font-weight: 500;
				font-size: 1rem;
			}
		}
	}
`;

const AboutMe = ({ isEngLang }) => {
	return (
		<Wrapper className="section" id="aboutmeSection">
			<h3>{isEngLang ? "Get to know me more" : "Poznaj mnie lepiej"}</h3>
			<h2>{isEngLang ? "About me" : "O mnie"}</h2>
			<div id="wrapper">
				<div id="imgWrap">
					<img src="manlaptop.jpg" alt="my_image" />
				</div>
				<div id="aboutMe">
					<p>
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula imperdiet erat, in euismod mauris efficitur varius. Integer tempor
						nec felis vel consequat. Mauris egestas imperdiet ligula, et imperdiet lectus ornare at. Maecenas sit amet neque odio. Cras ullamcorper
						cursus nulla sed euismod. In rutrum vestibulum neque eget feugiatLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula
						imperdiet erat, in euismod mauris efficitur varius. Integer tempor nec felis vel consequat. Mauris egestas imperdiet ligula, et imperdiet
						lectus ornare at. ',
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default AboutMe;
