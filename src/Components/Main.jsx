import { Link } from "react-router-dom";

const Main = () => {
    return(
        <>
       <Link to="/">
        <div className="topics">
                <div className="item">Weather</div>
                <div className="item">Work</div>
                <div className="item">Travel</div>
                <div className="item">School</div>
            </div>
       </Link>
        </>
    );
}

export default Main