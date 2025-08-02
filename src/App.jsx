import { useEffect, useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
import { ThemeProvider } from "styled-components";
// import AnimateSections from "./components/AnimateSections";
import SettingBar from "./mainComponents/SettingBar";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
	const [isDarkMode, setDarkMode] = useState(false);
	const toggleDarkMode = (e) => {
		setDarkMode(e);
	};

	const [isEngLang, setEngLang] = useState(true);
	const toggleLang = () => {
		setEngLang(e);
	};

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		setDarkMode(mediaQuery.matches);
	}, []);

	useEffect(() => {
		emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
	}, []);

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<SettingBar toggle={toggleDarkMode} darkMode={isDarkMode} toggleLang={toggleLang} engLang={isEngLang} />
		</ThemeProvider>
	);
}

export default App;
