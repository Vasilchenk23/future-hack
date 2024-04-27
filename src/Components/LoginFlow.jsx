import { useState } from "react";
import LanguageLevel from "./LanguageLevel";
// import { Link } from "react-router-dom";

const LoginFlow = () => {
    const [username, setUsername] = useState('');

    const handleSubmit = async () => {
        const userData = {
            name: username,
            language_lvl: 0
        };

        try {
            const response = await fetch('https://hackathon.ostolex.com/user/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                window.location.href = "/main";
            } else {
                console.error('Ошибка при отправке данных на сервер:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
        <LanguageLevel username={username} />
    };

    return (
        <>
            <input 
                type="text" 
                placeholder="Login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <button onClick={handleSubmit}>Send</button>
        </>
    );
}

export default LoginFlow;
