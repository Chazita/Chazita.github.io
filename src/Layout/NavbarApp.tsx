import { Drawer, NavLink } from "@mantine/core";
import { IconFolders, IconHome } from "@tabler/icons";
import { Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";

type DrawerAppProps = {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
};

function DrawerApp({ opened, setOpened }: DrawerAppProps) {
	const location = useLocation();

	return (
		<Drawer
			position="left"
			opened={opened}
			onClose={() => setOpened(false)}
			transitionTimingFunction="ease"
			transition="rotate-left"
			transitionDuration={5000}
		>
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
		</Drawer>
	);
}

export default DrawerApp;
