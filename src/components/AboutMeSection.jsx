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
		width: clamp(16rem, -0.16rem + 86.19vw, 55rem);
		flex-grow: 1;
		height: auto;
		max-height: 30rem;

		margin: 2rem;

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

			display: flex;
			flex-direction: column;
			gap: 1rem;

			@media screen and (min-width: 600px) {
				width: 55%;
				height: 100%;
			}

			p {
				width: 100%;
				height: auto;

				font-weight: 500;
				font-size: 1rem;
				@media screen and (min-width: 1024px) {
					font-size: 1.25rem;
					font-weight: 500;
				}
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
					{isEngLang ? (
						<>
							<p>
								Hi! My name is Patryk, and I’ve been passionate about technology since I was a child. This interest led me to complete a technical IT
								high school and earn an engineering degree from Merito University in Wrocław. I’m planning to start my master’s studies soon.
							</p>

							<p>
								I love solving problems and organizing things — these two traits are the foundation of my passion for programming. I have a lot of
								ideas, and programming languages allow me to bring them to life. So far, I've created an online book library, a simple Mario-inspired
								game, and a Star Wars-themed quiz.
							</p>

							<p>
								Programming brings me joy because it lets me turn ideas into real, working solutions. I value collaboration — I enjoy exchanging ideas
								and discussing different perspectives, as it helps me grow and improve my skills.
							</p>

							<p>
								I'm looking for opportunities to grow as a Junior Web Developer. I'm eager to take on new challenges — even if I don't yet have all
								the skills, I learn quickly and am not afraid of difficult tasks.
							</p>
						</>
					) : (
						<>
							<p>
								Cześć! Nazywam się Patryk i od najmłodszych lat fascynuję się technologią. To zainteresowanie doprowadziło mnie do ukończenia
								technikum informatycznego oraz studiów inżynierskich na Uniwersytecie Merito we Wrocławiu. Wkrótce planuję rozpocząć studia
								magisterskie.
							</p>

							<p>
								Uwielbiam rozwiązywać problemy i planować – te dwie cechy są fundamentem mojej pasji do programowania. Mam wiele pomysłów, a języki
								programowania pozwalają mi je realizować. Stworzyłem już m.in. własną bibliotekę online, prostą grę inspirowaną Mario oraz quiz o
								świecie Star Wars.
							</p>

							<p>
								Programowanie daje mi radość, ponieważ pozwala przekuwać idee w działające rozwiązania. Cenię sobie współpracę z innymi – lubię
								wymieniać się pomysłami i konfrontować różne punkty widzenia, bo to pozwala mi się rozwijać i doskonalić swoje umiejętności.
							</p>

							<p>Szukam możliwości rozwoju jako Junior Web Developer. Chętnie podejmę się nowych wyzwań – nawet jeśli czegoś jeszcze nie</p>
						</>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default AboutMe;
