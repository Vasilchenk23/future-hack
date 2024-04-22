import { Link } from "react-router-dom";

const Goals = () => {
    return(
        <>
                <div className="goals">
                    <Link to="/interests"><div className="item-goal">Travel</div></Link>
                    <Link to="/interests"><div className="item-goal">Work</div></Link>
                    <Link to="/interests"><div className="item-goal">Travel</div></Link>
                    <Link to="/interests"><div className="item-goal">Work</div></Link>
                </div>
        </>
    );
}

export default Goals;