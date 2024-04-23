import { Link } from "react-router-dom";

const LoginFlow = () => {
    return(
        <>
        <input type="text" placeholder="login"/>
        <input type="password" placeholder="password"/>
        <Link to="/main"><button>Send</button></Link>
        </>
    );
}

export default LoginFlow