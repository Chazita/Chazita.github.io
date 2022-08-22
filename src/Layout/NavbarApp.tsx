import { Container, Drawer, NavLink } from "@mantine/core";
import { IconFolders, IconHome } from "@tabler/icons";
import { Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSelector } from "../components/LanguageSelector";

type DrawerAppProps = {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
};

function DrawerApp({ opened, setOpened }: DrawerAppProps) {
	const location = useLocation();

	return (
		<Drawer position="left" opened={opened} onClose={() => setOpened(false)}>
			<NavLink
				label="Inicio"
				component={Link}
				to="/"
				icon={<IconHome />}
				active={location.pathname === "/"}
				onClick={() => setOpened(false)}
			/>
			<NavLink
				label="Project"
				component={Link}
				to="/projects"
				icon={<IconFolders />}
				active={location.pathname === "/projects"}
				onClick={() => setOpened(false)}
			/>

			<Container style={{ position: "absolute", bottom: "1rem" }} size="xl">
				<LanguageSelector />
			</Container>
		</Drawer>
	);
}

export default DrawerApp;
