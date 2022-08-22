import React, { Suspense, useState } from "react";
import {
	ColorScheme,
	ColorSchemeProvider,
	LoadingOverlay,
	MantineProvider,
} from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TitleProvider } from "./contexts/titleContext";
import Layout from "./Layout/Layout";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Project = React.lazy(() => import("./pages/Projects/Project"));

function App() {
	const preferredColorScheme = useColorScheme();
	const [title, setTitle] = useState("");

	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		getInitialValueInEffect: true,
		defaultValue: preferredColorScheme,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				<Suspense fallback={<LoadingOverlay visible={true} />}>
					<TitleProvider value={{ setTitle, title }}>
						<BrowserRouter>
							<Layout>
								<Routes>
									<Route index element={<Home />} />
									<Route path="/projects" element={<Project />} />
								</Routes>
							</Layout>
						</BrowserRouter>
					</TitleProvider>
				</Suspense>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default App;
