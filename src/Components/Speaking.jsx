import { Link } from "react-router-dom";

const Speaking = () => {
    return(
        <>
        <div className="main">
            <div className="white-block">
                <img className="eye-image" src="./img/eye.png" alt="eye" />
                <h1 className="item-text-h1">Кажи англійською</h1>
                <img src="./img/logo.png" alt="logo" />
            </div>
            <div className="black-block-speak">
                    <Link to="/lesson">
                        <div className="block-travel">
                            <div className="block">
                                <p className="item-text-travel">1</p>
                                <img className="item-img" src="./img/cloud.png" alt="cloud"/>
                                <p className="item-text-travel">Weather / Погода</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lesson">
                        <div className="block-travel">
                        <div className="block">
                                <p className="item-text-travel">2</p>
                                <img className="item-img" src="./img/pizza.png" alt="pizza"/>
                                <p className="item-text-travel">Food / Їжа</p>
                        </div>
                        </div>
                    </Link>
                    <Link to="/lesson">
                        <div className="block-travel">
                            <div className="block">
                                <p className="item-text-travel">3</p>
                                <img className="item-img" src="./img/airplane.png" alt="airplane"/>
                                <p className="item-text-travel">Travel / Подорожі</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lesson">
                        <div className="block-travel">
                            <div className="block">
                                <p className="item-text-travel">4</p>
                                <img className="item-img" src="./img/bowling.png" alt="bowling"/>
                                <p className="item-text-travel">Weather / Погода</p>
                            </div>
                        </div>
                    </Link>
            </div>
        </div>
        </>
    );
}

export default Speaking