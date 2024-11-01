import "./MyShopUpgrade.scss";

import UpgradeOneShop from "../../assets/icons/upgrade-1.svg";
import UpgradeTwoShop from "../../assets/icons/upgrade-2.svg";
import UpgradeThreeShop from "../../assets/icons/upgrade-3.svg";
import UpgradeForShop from "../../assets/icons/upgrade-4.svg";


export const MyShopUpgrade = () => {
    return (
        <>
            <div className="upgrade"> 
                <div className="upgrade__wrapper">
                    <div className="upgrade__item">
                        <img src={UpgradeOneShop} alt="" className="upgrade__item_icon" />
                        <h5 className="upgrade__item_title">Приобрести товары</h5>
                    </div>
                    <div className="upgrade__item">
                        <img src={UpgradeTwoShop} alt="" className="upgrade__item_icon" />
                        <h5 className="upgrade__item_title">Атрибуты магазина</h5>
                    </div>
                    <div className="upgrade__item">
                        <img src={UpgradeThreeShop} alt="" className="upgrade__item_icon" />
                        <h5 className="upgrade__item_title">Нанять персонал</h5>
                    </div>
                    <div className="upgrade__item">
                        <img src={UpgradeForShop} alt="" className="upgrade__item_icon" />
                        <h5 className="upgrade__item_title">Прочие потребности</h5>
                    </div>
                </div>
            </div>
        </>
    )
}