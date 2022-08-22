import {
	ActionIcon,
	Anchor,
	Footer,
	useMantineColorScheme,
} from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";

function FooterApp() {
	const { colorScheme } = useMantineColorScheme();
	const isDark = colorScheme === "dark" ? true : false;
	return (
		<Footer
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
			}}
			height={"50px"}
		>
			<Anchor
				sx={{ marginRight: "1rem" }}
				href="https://www.github.com/Chazita"
				target="_blank"
			>
				<ActionIcon
					color={isDark ? "gray" : "dark"}
					variant="outline"
					radius="xl"
					size={"lg"}
				>
					<IconBrandGithub />
				</ActionIcon>
			</Anchor>

			<Anchor
				href="https://www.linkedin.com/in/matias-chazarreta/"
				target="_blank"
			>
				<ActionIcon color="indigo" variant="outline" radius="xl" size={"lg"}>
					<IconBrandLinkedin />
				</ActionIcon>
			</Anchor>
		</Footer>
	);
}

export default FooterApp;
