import { AppShell } from "@mantine/core";
import { ReactNode, useState } from "react";
import FooterApp from "./FooterApp";
import HeaderApp from "./HeaderApp";
import NavbarApp from "./NavbarApp";

export type LayoutProps = {
	children: ReactNode;
};

function Layout({ children }: LayoutProps) {
	const [open, setOpen] = useState(false);
	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			header={<HeaderApp opened={open} setOpened={setOpen} />}
			footer={<FooterApp />}
			navbar={<NavbarApp opened={open} setOpened={setOpen} />}
		>
			{children}
		</AppShell>
	);
}

export default Layout;
