import { useState } from "react";
import styled, { useTheme } from "styled-components";
const Container = styled.div`
	display: grid;
	place-items: center;

	position: sticky;

	bottom: 0;
	left: 0;

	width: 100%;
	height: 5rem; // to change

	flex-shrink: 0;

	background-color: ${({ theme }) => theme.backgroundColor};

	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

const Menu = styled.div`
	width: 80%;
	max-width: 30rem;
	height: 4rem;

	background-color: ${({ theme }) => theme.menuColor};

	border: solid 3px ${({ theme }) => theme.menuColor};
	border-radius: 15px;

	button {
		width: 25%;
		height: 100%;

		border: none;

		padding: 8px;

		background-color: ${({ theme }) => theme.menuColor};
		a {
			width: 100%;
			height: 100%;
			img {
				height: 100%;
				width: auto;

				object-fit: contain;

				margin: auto;
			}
		}
	}
	button:first-child {
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
	}
	button:last-child {
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
	}

	.active {
		background-color: ${({ theme }) => theme.activeButtonColor};
		will-change: background-color;
	}
`;

const MobileMenu = () => {
	const theme = useTheme();
	const [activeBtn, setActive] = useState(-1);

	const handleClick = (index) => {
		setActive(index);
	};

	return (
		<Container>
			<Menu>
				<button onClick={() => handleClick(0)} className={activeBtn === 0 ? "active" : ""}>
					<a href="#skillsSection">
						<img src={activeBtn === 0 ? theme.menuIcons.activeResume : theme.menuIcons.resume} alt="resume_skills" />
					</a>
				</button>
				<button onClick={() => handleClick(1)} className={activeBtn === 1 ? "active" : ""}>
					<a href="#projectSection">
						<img src={activeBtn === 1 ? theme.menuIcons.activeProject : theme.menuIcons.project} alt="project_list" />
					</a>
				</button>
				<button onClick={() => handleClick(2)} className={activeBtn === 2 ? "active" : ""}>
					<a href="#aboutmeSection">
						<img src={activeBtn === 2 ? theme.menuIcons.activeProfile : theme.menuIcons.profile} alt="about_me" />

					</a>
				</button>
				<button onClick={() => handleClick(3)} className={activeBtn === 3 ? "active" : ""}>
					<a href="#contactSection">
						<img src={activeBtn === 3 ? theme.menuIcons.activeContact : theme.menuIcons.contact} alt="contact_me" />
					</a>
				</button>
			</Menu>
		</Container>
	);
};

export default MobileMenu;
