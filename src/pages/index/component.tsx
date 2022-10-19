import "./styles.scss";

import { useTranslation } from 'react-i18next';
import Header from "../../blocks/Header";

export default function IndexPage () {
    const { t } = useTranslation("p_index");

    return (
        <>
            <Header/>
            <div className="main">
                {t("title")}
            </div>
        </>
    )
}