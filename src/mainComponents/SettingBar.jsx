import styled, { useTheme } from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;

	position: sticky;
	top: 0;
	left: 0;

	width: 100%;
	height: 4rem; //to change

	padding: 0.5rem 1rem; // to change

	background-color: ${({ theme }) => theme.backgroundColor};

	button {
		height: 100%;
		width: auto;

		border: none;
		background: none;

		cursor: pointer;
		img {
			height: 100%;
			width: 100%;

			object-fit: contain;
		}

		span {
			color: ${({ theme }) => theme.fontColor};
		}
	}
`;

const SettingBar = ({ toggle, darkMode, toggleLang, engLang }) => {
	const theme = useTheme();
	const handleChangeTheme = () => {
		toggle(!darkMode);
	};
	const handleChangeLang = () => {
		toggleLang(!engLang);
	};
	return (
		<Container>
			<button onClick={handleChangeTheme}>
				<img src={theme.themeIcon} alt="toggle_theme" />
			</button>
			<button onClick={handleChangeLang}>
				<span>PL | EN</span>
			</button>
		</Container>
	);
};

export default SettingBar;
