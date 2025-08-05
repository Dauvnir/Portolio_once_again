import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMeSection";
import SkillSection from "../components/SkillSection";
import ProjectsSection from "../components/ProjectsSection";

const Wrapper = styled.div`
	width: 100%;
	height: auto;

	flex-grow: 1;

	overflow: scroll;

	background-color: ${({ theme }) => theme.backgroundColor};

	padding: 0 1rem;
`;
const Content = ({ isEngLang }) => {
	return (
		<Wrapper>
			{/* <HeroSection isEngLang={isEngLang} /> */}
			{/* <AboutMe isEngLang={isEngLang} /> */}
			{/* <SkillSection isEngLang={isEngLang} /> */}
			<ProjectsSection isEngLang={isEngLang}/> 
		</Wrapper>
	);
};

export default Content;
