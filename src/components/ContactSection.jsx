import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

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
			a {
				width: 100%;
				height: 5rem;
				text-decoration: none;
			}
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
			position: relative;

			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			flex-wrap: nowrap;

			width: 16rem;
			@media screen and (min-width: 700px) {
				width: clamp(16rem, 5.839rem + 23.23vw, 25rem);
			}
			height: auto;

			margin-block: 1rem;
			padding: 1rem;
			border-radius: 15px;
			gap: 1rem;

			background-color: ${({ theme }) => theme.menuColor};

			#errorMsg {
				width: 100%;
				height: auto;
				background-color: ${({ theme }) => theme.backgroundColor};

				padding: 0.25rem 0.5rem;
				border-radius: 10px;

				font-size: 1.125rem;
				font-weight: 700;
				color: ${({ theme }) => theme.fontColor};
			}
			#blur {
				width: 100%;
				height: 100%;

				position: absolute;
				top: 0;
				left: 0;

				z-index: 2;

				backdrop-filter: blur(4px);

				border-radius: 10px;

				display: flex;

				p {
					width: auto;
					height: auto;

					margin: auto;
					padding: 0.5rem;

					font-size: 1.125rem;
					font-weight: 700;
					background-color: ${({ theme }) => theme.backgroundColor};
					border-radius: 10px;
				}
			}
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
			a {
			}
			button {
				width: 8rem;
				height: auto;

				padding: 0.5rem 0;

				border-radius: 10px;
				border: none;
				outline: none;
				cursor: pointer;

				background-color: ${({ theme }) => theme.backgroundColor};
				span {
					will-change: color;
					transition: color 0.5s ease;
					font-weight: 600;

					color: ${({ theme }) => theme.fontColor};
				}
			}
		}
	}
`;

const ContactSection = ({ isEngLang }) => {
	const [email, setEmail] = useState("");
	const [title, setTitle] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const [disable, setDisable] = useState(false);

	const form = useRef(null);

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handleTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleMsg = (event) => {
		setMsg(event.target.value);
	};

	const validateForm = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setError(isEngLang ? "Invalid email address." : "Nieprawidłowy adres email.");
			return false;
		}

		if (title.length < 4) {
			setError(isEngLang ? "Title must be at least 4 characters long." : "Tytuł musi mieć co najmniej 4 znaki.");
			return false;
		}

		if (msg.trim() === "") {
			setError(isEngLang ? "Message cannot be empty." : "Wiadomość nie może być pusta.");
			return false;
		}

		setError("");
		return true;
	};

	const submitMessage = (event) => {
		event.preventDefault();
		if (validateForm() && form.current) {
			emailjs
				.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
					publicKey: import.meta.env.VITE_PUBLIC_KEY,
				})
				.then(
					() => {
						setError(isEngLang ? "Message sent successfully!" : "Wiadomość wysłana pomyślnie!");
					},
					(error) => {
						setError(`${error.text}`);
					}
				);

			setEmail("");
			setTitle("");
			setMsg("");
			setDisable(true);
		}
	};
	return (
		<Wrapper className="section exclude" id="contactSection">
			<h3>{isEngLang ? "Find me on" : "Znajdź mnie na"}</h3>
			<h2>{isEngLang ? "Contact" : "Kontakt"}</h2>

			<div id="container">
				<form onSubmit={submitMessage} ref={form}>
					{disable && (
						<div id="blur" content="">
							<p>{error}</p>
						</div>
					)}
					{error && !disable && <p id="errorMsg">{error}</p>}
					<input
						type="email"
						placeholder={isEngLang ? "Email address" : "Adres email"}
						name="email"
						autoComplete="none"
						required
						value={email}
						onChange={handleEmail}
					/>
					<input type="text" placeholder={isEngLang ? "Name and surname" : "Imię i nazwisko"} name="name" autoComplete="none" required />
					<input
						type="text"
						placeholder={isEngLang ? "Title" : "Tytuł"}
						name="title"
						autoComplete="none"
						required
						value={title}
						onChange={handleTitle}
					/>
					<textarea
						type="text"
						placeholder={isEngLang ? "Message" : "Wiadomość"}
						name="message"
						autoComplete="none"
						value={msg}
						onChange={handleMsg}
						required
					/>
					<button type="submit" disabled={disable}>
						<span>{isEngLang ? "Send" : "Wyślij"}</span>
					</button>
				</form>
				<div id="contactWrapper">
					<a href="https://t.me/Dauvnir" target="_blank">
						<button>
							<img alt="telegram" id="telegram" />
							<span>Telegram</span>
						</button>
					</a>
					<a href="https://api.whatsapp.com/send/?phone=48887075912&text&type=phone_number&app_absent=0" target="_blank">
						<button>
							<img alt="WhatsApp" id="whatsapp" />
							<span>WhatsApp</span>
						</button>
					</a>
					<a href="https://github.com/Dauvnir" target="_blank">
						<button>
							<img alt="Github" id="github" />
							<span>Github</span>
						</button>
					</a>
				</div>
			</div>
		</Wrapper>
	);
};

export default ContactSection;
