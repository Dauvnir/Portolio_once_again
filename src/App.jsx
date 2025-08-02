import { useEffect, useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
import { ThemeProvider } from "styled-components";
import AnimateSections from "./components/AnimateSections";

function App() {
	const [isDarkMode, setDarkMode] = useState(false);
	const toggleDarkMode = (e) => {
		setDarkMode(e);
	};

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		setDarkMode(mediaQuery.matches);
	}, []);

	useEffect(() => {
		emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
	}, []);

	return <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}></ThemeProvider>;
}

export default App;
