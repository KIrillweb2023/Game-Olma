import "./MyShop.scss";

import ShopIcon from "../../assets/icons/shop-one.svg";

export const MyShop = () => {
    return (
        <>
            <div className="shop">
                <img src={ShopIcon} alt="" className="shop__icon" />
                <h3 className="shop__name">Hardware-shop</h3>
                <span className="shop__span">Click for information</span>
            </div>
        </>
    )
}