import {useTranslation} from "react-i18next";
import './styles.scss';

//TODO: Сделать этот компонент с названием только для смены языка (название соответствующее)
export default function Switch() {
    const { i18n } = useTranslation();

    return (
        <label className="switch">
            <input
                type="checkbox"
                className="switch-checkbox"
                onChange={(e) =>
                    e.target.checked ? i18n.changeLanguage("ru") : i18n.changeLanguage("en")
                }
            />
            <div className="slider"/>
        </label>
    );
}
