import { Link } from "react-router-dom";

const LanguageLevel = () => {
    return(
        <>
            <Link to="/language-level">
                <div className="languageLevel">
                    <div className="item-level-A1">A1</div>
                    <div className="item-level-A2">A2</div>
                    <div className="item-level-B1">B1</div>
                    <div className="item-level-B2">B2</div>
                    <div className="item-level-C1">C1</div>
                    <div className="item-level-C2">C2</div>
                </div>
            </Link>
        </>
    );
}

export default LanguageLevel;