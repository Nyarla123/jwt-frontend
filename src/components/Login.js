import React,{useState, useEffect} from "react";
import {executeHelloService, executeJwtAuthenticationService, registerSuccessfulLoginForJwt} from "../apis/authApi";

const Login = () => {

    const [username, setUsername] = useState( '');
    const [password, setPassword] = useState("");
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [test, setTest] = useState("");
    const nameChange = (e) => {
        setUsername(e.target.value);
    };
    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const resetNameAndPassword = () => {
        setUsername('');
        setPassword('');
    };

    const loginClicked = () => {
        setUsername(JSON.stringify({username}.username));
        setPassword(JSON.stringify({password}.password));
        executeJwtAuthenticationService({username}.username, {password}.password)
            .then((response) => {
                console.log(localStorage);
                console.log(response);
                console.log({username}.username);
                console.log({password}.password);
                setJwtToken(response.data.jwtToken);
                setShowSuccessMessage(true);
                console.log({jwtToken});
                registerSuccessfulLoginForJwt({username}, {jwtToken});
                resetNameAndPassword();
            }).catch((error) => {
            console.log(error);
            setHasLoginFailed(true);
        });
    };

    const Hello = () => {
        executeHelloService().then((response) => {
            console.log(response);
            console.log(response.data);
            setTest(response.data);
        });
    };

    return(
        <div className='text-center'>
            <h1>Login</h1>
            <div className='container'>
                {hasLoginFailed && <div className='alert alert-warning'>로그인 실패</div>}
                {showSuccessMessage && <div>Login Successful</div>}
                UserName : <input type='text' name='username' value={username} onChange={nameChange} />
                Password : <input type='password' name='password' value={password} onChange={passwordChange} />
                <button onClick={loginClicked}>Login</button>
                <button onClick={Hello}>Hello</button>
            </div>
        </div>
    )

};

export default Login;