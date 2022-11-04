import "./styles.scss";

import { useTranslation } from "react-i18next";
import Header from "../../blocks/Header";
import Profile from "../../blocks/Profile";

export default function ProfilePage() {
    const { t } = useTranslation("p_profile");

    return (
        <>
            <Header/>
            <Profile/>
        </>
    )
}