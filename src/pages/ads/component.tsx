import "./styles.scss";

import { useTranslation } from "react-i18next";

export default function AdsPage() {
    const { t } = useTranslation("p_ads");

    return (
        <div>{t("title")}</div>
    )
}