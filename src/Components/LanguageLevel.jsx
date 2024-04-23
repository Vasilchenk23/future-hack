import { Link } from "react-router-dom";

const LanguageLevel = () => {
    return(
        <>
            <div className="main">
                <div className="white-block">
                    <img className="eye-image" src="./img/eye.png" alt="eye" />
                    <h1 className="item-text-h1">Якій в тебе рівень англійської?</h1>
                    <img src="./img/logo.png" alt="logo" />
                </div>
                <div className="black-block-level-english">
                    <Link to="/goals">
                        <div className="item-block">
                            <p className="item-text">1</p>
                            <p className="item-text-level">Знаю що London is the capital of the Great Britan</p>
                        </div>
                    </Link>
                    <Link to="/goals">
                        <div className="item-block">
                            <p className="item-text">2</p>
                            <p className="item-text-level">Можу замовити каву. Але тільки small</p>
                        </div>
                    </Link>
                    <Link to="/goals">
                        <div className="item-block">
                            <p className="item-text">3</p>
                            <p className="item-text-level">Розповім як пройшов мій день, якщо він був good</p>
                        </div>
                    </Link>
                    <Link to="/goals">
                        <div className="item-block">
                            <p className="item-text">4</p>
                            <p className="item-text-level">Можу вести бесіду на різноманітні теми. Пишу твіти без помилок (майже)</p>
                        </div>
                    </Link>
                   <Link to="/goals">
                    <div className="item-block">
                            <p className="item-text">5</p>
                            <p className="item-text-level">Можу використовувати складну мову. Дивлюсь серіали без субтитрів</p>
                        </div>
                   </Link>
                    <Link to="/goals">
                        <div className="item-block">
                            <p className="item-text">6</p>
                            <p className="item-text-level">Розмовляю як носій. Dobry den, everybody</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LanguageLevel;