import { Link } from "react-router-dom";

const LanguageLevel = () => {
    return(
        <>
                <div className="languageLevel">
                    <Link to="/goals"><div className="item-level-A1">A1</div></Link>
                    <Link to="/goals"><div className="item-level-A2">A2</div></Link>
                    <Link to="/goals"><div className="item-level-B1">B1</div></Link>
                    <Link to="/goals"><div className="item-level-B2">B2</div></Link>
                    <Link to="/goals"><div className="item-level-C1">C1</div></Link>
                    <Link to="/goals"><div className="item-level-C2">C2</div></Link>
                </div>
        </>
    );
}

export default LanguageLevel;