import { Link } from "react-router-dom";

const Main = () => {
    return(
        <>
        <div className="main">
            <div className="white-block">
                <img className="eye-image" src="./img/eye.png" alt="eye" />
                <h1 className="item-text-h1">Кажи англійською</h1>
                <img src="./img/logo.png" alt="logo" />
            </div>
            <div className="black-block">
               <Link to="/level"> <button className="item-button">Увійти через Дію</button></Link>
            </div>
        </div>
        </>
    );
}

export default Main