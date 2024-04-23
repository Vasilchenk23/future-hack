import { Link } from "react-router-dom";

const Goals = () => {
    return(
        <>
        <div className="main">
            <div className="white-block">
                <img className="eye-image" src="./img/eye.png" alt="eye" />
                <h1 className="item-text-h1">Для чого ти вивчаєш англійську?</h1>
                <img src="./img/logo.png" alt="logo" />
            </div>
            <div className="black-block-goals">
                <div className="item-div"><Link to="/speaking">Prepare to travel</Link></div>
                <div className="item-div"><Link>Boost my career</Link></div>
                <div className="item-div"><Link>Spend time productively</Link></div>
                <div className="item-div"><Link>Connect with people</Link></div>
                <div className="item-div"><Link>Support my education</Link></div>
                <div className="item-div"><Link>Just for fun</Link></div>
            </div>
        </div>
        </>
    );
}

export default Goals;