import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMeSection";
import SkillSection from "../components/SkillSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import AnimateSections from "../components/AnimateSections";
const Wrapper = styled.div`
	width: 100%;
	height: auto;

	flex-grow: 1;

	background-color: ${({ theme }) => theme.backgroundColor};

	padding: 0 1rem;

	scroll-behavior: smooth;
	scroll-snap-type: y mandatory;
	overflow-y: scroll;
`;
const Content = ({ isEngLang }) => {
	return (
		<Wrapper>
			<HeroSection isEngLang={isEngLang} />
			<AnimateSections>
				<SkillSection isEngLang={isEngLang} />
			</AnimateSections>
			<AnimateSections>
				<ProjectsSection isEngLang={isEngLang} />
			</AnimateSections>
			<AnimateSections>
				<AboutMe isEngLang={isEngLang} />
			</AnimateSections>
			<AnimateSections>
				<ContactSection isEngLang={isEngLang} />
			</AnimateSections>
		</Wrapper>
	);
};

export default Content;
