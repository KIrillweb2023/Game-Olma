import "./MyShopDownPanel.scss";

import PanelDownIcon from "../../assets/icons/shopPanel.svg";
import PanelSettingsIcon from "../../assets/icons/settings.svg";

export const MyShopDownPanel = () => {
    return (
        <>
            <div className="panel">
                <div className="panel__wrapper">
                    <div className="panel__item">
                        <img className="panel__item_icon" src={PanelDownIcon} alt="" />
                        <h4 className="panel__item_title">Покупка <br/>комерции</h4>
                    </div>
                    <div className="panel__item">
                        <img className="panel__item_icon" src={PanelDownIcon} alt="" />
                        <h4 className="panel__item_title">Покупка <br/>комерции</h4>
                    </div>
                    <div className="panel__item">
                        <img className="panel__item_icon" src={PanelSettingsIcon} alt="" />
                        <h4 className="panel__item_title">Мои <br/>настройки</h4>
                    </div>
                </div>
            </div>
        </>
    )
}