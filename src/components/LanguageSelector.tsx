import { MantineNumberSize, MediaQuery, Select } from "@mantine/core";
import { useTranslation } from "react-i18next";

type LanguageSelectorProps = {
	smallerThan?: MantineNumberSize;
};

export const LanguageSelector = (props: LanguageSelectorProps) => {
	const { i18n } = useTranslation();

	return (
		<MediaQuery {...props} styles={{ display: "none" }}>
			<Select
				value={i18n.language.substring(0, 2)}
				onChange={(data) =>
					data === null ? i18n.changeLanguage("en") : i18n.changeLanguage(data)
				}
				data={[
					{ value: "en", label: "English" },
					{ value: "es", label: "Español" },
				]}
			/>
		</MediaQuery>
	);
};
