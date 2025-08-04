import styled from "styled-components";

const skills = [
	"JavaScript",
	"CSS",
	"Git",
	"HTML",
	"React",
	"Styled-components",
	"Node.js",
	"Express",
	"PostgreSQL",
	"Figma",
	"DBML",
	"Vite",
	"SASS",
];

const Container = styled.div`
	color: ${({ theme }) => theme.fontColor};
	text-align: center;

	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	overflow: hidden;
	.skillBtn {
		width: auto;
		height: clamp(3rem, 1.757rem + 6.63vw, 6rem);

		padding: 0.75rem 1rem;

		display: grid;
		place-items: center;

		border-radius: 20px;

		background-color: ${({ theme }) => theme.menuColor};
		color: ${({ theme }) => theme.reverseFontColor};

		border: none;

		@media screen and (min-width: 1024px) {
			height: clamp(4rem, 2.857rem + 1.79vw, 5rem);
		}
	}

	#wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		row-gap: 0.7rem;
		column-gap: 0.7rem;

		margin-top: 1.5rem;

		span {
			font-size: clamp(1.25rem, 0.836rem + 2.21vw, 2.25rem);
			font-weight: 600;
		}

		@media screen and (min-width: 1024px) {
			row-gap: 1.5rem;
			column-gap: 1.5rem;
		}
	}
`;

const SkillSection = ({ isEngLang }) => {
	return (
		<Container>
			<h3>{isEngLang ? "Technologies and languages that I used" : "Technologie i języki programowania wykorzystane w projektach"}</h3>
			<h2>{isEngLang ? "Proficiency" : "Doświadczenie"}</h2>
			<div id="wrapper">
				{skills.map((skill, index) => {
					return (
						<button className="skillBtn" key={index}>
							<span>{skill}</span>
						</button>
					);
				})}
			</div>
		</Container>
	);
};

export default SkillSection;
