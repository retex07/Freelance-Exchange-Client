import "./styles.scss";

import { useTranslation } from "react-i18next";

export default function ProfilePage() {
    const { t } = useTranslation("p_profile");

    return (
        <div>{t("title")}</div>
    )
}