import "./Level.scss";


export const Level = () => {
    return (
        <>
            <div className="level">
                <h3 className="level__title">Level</h3>

                <span className="level__prev level__count">0</span>
                <span className="level__next level__count">1</span>

                <div className="level__container">
                    <div className="level__child"></div>
                </div>
            </div>
        </>
    )
}