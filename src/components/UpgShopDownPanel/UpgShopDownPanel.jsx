import "./UpgShopDownPanel.scss";

import UpgradeOneShop from "../../assets/icons/upgrade-1.svg";
import UpgradeTwoShop from "../../assets/icons/upgrade-2.svg";
import UpgradeThreeShop from "../../assets/icons/upgrade-3.svg";
import UpgradeForShop from "../../assets/icons/upgrade-4.svg";


export const UpgShopDownPanel = () => {
    return (
        <>
            <div className="downpanel">
                <div className="downpanel__wrapper">
                    <div className="downpanel__item">
                        <img className="downpanel__item_icon" src={UpgradeOneShop} alt="" />
                        <h4 className="downpanel__item_title">Приобрести <br/>товары</h4>
                    </div>
                    <div className="downpanel__item">
                        <img className="downpanel__item_icon" src={UpgradeTwoShop} alt="" />
                        <h4 className="downpanel__item_title">Атрибуты <br/>магазина</h4>
                    </div>
                    <div className="downpanel__item">
                        <img className="downpanel__item_icon" src={UpgradeThreeShop} alt="" />
                        <h4 className="downpanel__item_title">Нанять <br/>персонал</h4>
                    </div>
                    <div className="downpanel__item">
                        <img className="downpanel__item_icon" src={UpgradeForShop} alt="" />
                        <h4 className="downpanel__item_title">Прочие <br/>потребности</h4>
                    </div>
                </div>
            </div>
        </>
    )
}