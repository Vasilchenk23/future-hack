import { Link } from "react-router-dom";

const Lesson = () => {
    return(
        <>
        <div className="main">
            <div className="white-block">
                <img className="eye-image" src="./img/eye.png" alt="eye" />
                <h1 className="item-text-h1">What hobbies do you have? Які в тебе хобі?</h1>
                <img src="./img/logo.png" alt="logo" />
            </div>
            <div className="black-block">
                <Link to="/finish"><img src="./img/microphone.png" alt="" /></Link>
            </div>
        </div>
        </>
    );
}

export default Lesson;