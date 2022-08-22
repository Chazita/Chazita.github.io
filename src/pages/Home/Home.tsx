import { Text, Image, Container, Title, List } from "@mantine/core";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import perfilPhoto from "../../assets/perfil.jpg";
import { TitleContext } from "../../contexts/titleContext";

function Home() {
	const { t } = useTranslation("home");
	const { setTitle } = useContext(TitleContext);

	useEffect(() => {
		document.title = `Chazarreta Matias - ${t("head")}`;
		setTitle(`${t("head")}`);
	});

	return (
		<Container
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
			size="sm"
		>
			<div style={{ width: 300 }}>
				<Image
					radius="lg"
					src={perfilPhoto}
					alt="Perfil photo"
					withPlaceholder
				/>
			</div>
			<div
				style={{ marginTop: "2rem", display: "flex", flexDirection: "column" }}
			>
				<Title order={1} style={{ alignSelf: "center", marginBottom: "1rem" }}>
					{t("title")}
				</Title>
				<Text size="xl">{t("content")}</Text>
				<Text size="xl" style={{ marginTop: "1rem" }}>
					{t("content2")}
				</Text>

				<Title
					order={2}
					style={{
						alignSelf: "center",
						marginTop: "2rem",
						marginBottom: "1rem",
					}}
				>
					{t("contactTitle")}
				</Title>
				<Text size={"xl"} style={{ alignSelf: "center" }}>
					{t("email")}
				</Text>
			</div>
		</Container>
	);
}

export default Home;
