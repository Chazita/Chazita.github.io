import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";

export const ButtonMode = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<ActionIcon
			onClick={() => toggleColorScheme()}
			size={"md"}
			variant="outline"
		>
			{colorScheme === "dark" ? <IconMoon size={18} /> : <IconSun size={18} />}
		</ActionIcon>
	);
};
