import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const Wrapper = styled.div`
	width: 100%;
	height: auto;

	flex-grow: 1;

	overflow: scroll;

	background-color: ${({ theme }) => theme.backgroundColor};
`;
const Content = ({ isEngLang }) => {
	return (
		<Wrapper>
			<HeroSection isEngLang={isEngLang} />
		</Wrapper>
	);
};

export default Content;
