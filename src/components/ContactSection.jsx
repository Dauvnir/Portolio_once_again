import styled from "styled-components";

const Wrapper = styled.section`
	color: ${({ theme }) => theme.fontColor};

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	#container {
		width: 100%;
		height: auto;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;

		#contactWrapper {
			width: 16rem;
			height: auto;

			margin-bottom: 1rem;
			border-radius: 15px;

			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 1rem;

			button {
				width: 100%;
				height: 5rem;

				border-radius: 15px;

				display: flex;
				justify-content: center;
				align-items: center;

				overflow: hidden;
				border: none;

				padding: 0.25rem 0.5rem;
				background-color: ${({ theme }) => theme.menuColor};

				cursor: pointer;

				img {
					height: 100%;
					width: auto;
				}
				#telegram {
					content: url(${({ theme }) => theme.contactIcons.telegram});
				}
				#whatsapp {
					content: url(${({ theme }) => theme.contactIcons.whatsapp});
				}
				#github {
					content: url(${({ theme }) => theme.contactIcons.github});
				}
				span {
					flex-grow: 1;
					width: auto;

					font-weight: 700;

					color: ${({ theme }) => theme.reverseFontColor};
				}
			}
		}
		form {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			flex-wrap: nowrap;

			width: 16rem;
			height: 25rem;

			margin-block: 1rem;
			padding: 1rem;
			border-radius: 15px;
			gap: 1rem;

			background-color: ${({ theme }) => theme.menuColor};

			input {
				width: 100%;
				height: 3rem;

				border-radius: 10px;
				border: none;

				padding: 0.25rem 0.5rem;

				font-size: 1.125rem;
				font-weight: 600;

				box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.25);

				&:focus {
					outline-color: ${({ theme }) => theme.backgroundColor};
					outline-width: 1px;
					outline-style: solid;
				}
				&::placeholder {
					font-size: 1.125rem;
					font-weight: 600;
				}
			}
			textarea {
				width: 100%;
				height: 10rem;

				overflow: scroll;
				resize: none;

				padding: 0.25rem 0.5rem;

				font-size: 1.125rem;
				font-weight: 600;

				border-radius: 10px;
				border: none;

				box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
				&:focus {
					outline-color: ${({ theme }) => theme.backgroundColor};
					outline-width: 1px;
					outline-style: solid;
				}
				&::placeholder {
					font-size: 1.125rem;
					font-weight: 600;
				}
			}
			button {
				width: auto;
				height: auto;

				padding: 0.25rem 0.5rem;

				border-radius: 10px;
				border: none;
				outline: none;

				color: ${({ theme }) => theme.fontColor};

				background-color: ${({ theme }) => theme.backgroundColor};

				span {
					font-weight: 600;
				}
			}
		}
	}
`;
const ContactSection = ({ isEngLang }) => {
	return (
		<Wrapper className="section exclude">
			<h3>{isEngLang ? "Find me on" : "Znajdź mnie na"}</h3>
			<h2>{isEngLang ? "Contact" : "Kontakt"}</h2>

			<div id="container">
				<form>
					<input type="email" placeholder={isEngLang ? "Email address" : "Adres email"} name="email" autoComplete="none" required />
					<input type="text" placeholder={isEngLang ? "Name and surname" : "Imię i nazwisko"} name="name" autoComplete="none" required />
					<input type="text" placeholder={isEngLang ? "Title" : "Tytuł"} name="title" autoComplete="none" required />
					<textarea type="text" placeholder={isEngLang ? "Message" : "Wiadomość"} name="message" autoComplete="none" required />
					<button type="submit">
						<span>{isEngLang ? "Send" : "Wyślij"}</span>
					</button>
				</form>
				<div id="contactWrapper">
					<button>
						<img alt="telegram" id="telegram" />
						<span>Telegram</span>
					</button>
					<button>
						<img alt="WhatsApp" id="whatsapp" /> <span>WhatsApp</span>
					</button>
					<button>
						<img alt="Github" id="github" />
						<span>Github</span>
					</button>
				</div>
			</div>
		</Wrapper>
	);
};

export default ContactSection;
