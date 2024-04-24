import { Link } from "react-router-dom";

const LoginFlow = () => {
    return(
        <>
        <input type="text" placeholder="login"/>
        <br />
        <input type="password" placeholder="password"/>
        <br />
        <Link to="/main"><button>Send</button></Link>
        </>
    );
}

export default LoginFlow