import { Link } from "react-router-dom";

const Controls = () =>{
    return(
        <>
            <div className="controls">
                <Link to="/language-level"><div className="item-mouse">Mouse</div></Link>
                <Link to="/language-level"><div className="item-voice">Voice</div></Link>
            </div>
        </>
    );
}

export default Controls;