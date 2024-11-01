import "./Paytime.scss";
import PayTimeIcon from "../../assets/icons/paytimeicon.svg"

export const Paytime = () => {
    return (
        <>
            <div className="paytime">
                <div className="paytime__wrapper">
                    <img className="paytime__icon" src={PayTimeIcon} alt="" />

                    <div className="paytime__text">
                        <h4 className="paytime__title">
                            Доход в час
                        </h4>
                        <h2 className="paytime__count">234,23434</h2>
                    </div>
                </div>
            </div>
        </>
    )
}