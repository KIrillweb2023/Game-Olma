import "./IncomeCount.scss";
import GoldCoin from "../../assets/icons/coin.svg"
import DiamondCoin from "../../assets/icons/diamond.svg"

export const IncomeCount = () => {
    return (
        <>
            <div className="coins">
                <div className="coins__wrapper">

                    <div className="coins__item">
                        <img className="coins__icon" src={GoldCoin} alt="" />
                        <h4 className="coins__title">234254345</h4>
                    </div>

                    <div className="coins__item">
                        <h4 className="coins__title">345</h4>
                        <img className="coins__icon" src={DiamondCoin} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}