import "./styles.scss";

import { useTranslation } from 'react-i18next';
import Header from "../../blocks/Header";
import Hero from "../../blocks/Hero";
import AdsComponent from "../../components/AdsComponent";
import AdsBlock from "../../blocks/AdsBlock";

export default function IndexPage () {
    const { t } = useTranslation("p_index");

    return (
        <>
            <Header/>
            <main className="main">
                <Hero/>
                <AdsBlock/>
            </main>
        </>
    )
}