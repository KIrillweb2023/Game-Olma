import "./UpgShop.scss";
import UpgradeOneShop from "../../assets/icons/upgrade-1.svg";

export const UpgShop = () => {
    return (
        <>
            <div className="shopping">

                <h3 className="shopping__title">Улучшения для коммерции</h3>
                <h5 className="shopping__subtitle">Products</h5>


                <div className="shopping__wrapper">
                    <div className="shopping__item">
                        <img src="UpgradeOneShop" alt="" />
                        <div className="shopping__item_text">
                            <div className="shopping__item_text-title"></div>
                            <span className="shopping__item_text-stateLevel"></span>
                        </div>
                    </div>
                   
                </div>

            </div>
        </>
    )
}