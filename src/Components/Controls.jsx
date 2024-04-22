import { Link } from "react-router-dom";

const Controls = () =>{
    return(
        <>
        <Link to="/controls">
            <div className="controls">
                <div className="item-mouse">Mouse</div>
                <div className="item-voice">Voice</div>
            </div>
        </Link>
        </>
    );
}

export default Controls;