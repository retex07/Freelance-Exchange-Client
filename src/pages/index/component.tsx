import "./styles.scss";

import { useTranslation } from 'react-i18next';

export default function IndexPage() {
    const { t } = useTranslation("p_index");

    return (
        <div className="main">{t("title")}</div>
    )
}