import "./styles.scss";

import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../../blocks/Header";
import ProfileEdit from "../../blocks/ProfileEdit";

export default function ProfilePage() {
    const { t } = useTranslation("p_profile");

    return (
        <>
            <Header/>
            
            <Outlet/>
        </>
    )
}