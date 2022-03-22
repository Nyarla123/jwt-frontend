import React,{useState} from "react";
import {
    adminTest,
    executeHelloService,
    executeJwtAuthenticationService,
    registerSuccessfulLoginForJwt
} from "../apis/authApi";

const Login = () => {

    const [username, setUsername] = useState( '');
    const [password, setPassword] = useState("");
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
        executeJwtAuthenticationService(username, password)
            .then((response) => {
                console.log(localStorage);
                console.log(response);
                console.log(username);
                console.log(password);
                console.log(response.headers.authorization);
                setJwtToken(response.headers.authorization);
                setShowSuccessMessage(true);
                console.log(jwtToken);
                registerSuccessfulLoginForJwt(username, jwtToken);
                resetNameAndPassword();
                setHasLoginFailed(false);
            }).catch((error) => {
            console.log(error);
            setHasLoginFailed(true);
        });
    };

    const Hello = () => {
        executeHelloService().then((response) => {
            console.log(response);
            console.log(response.data);
        });
    };

    const admin = () => {
        adminTest().then((response) =>{
            console.log(response);
            console.log(response.data);
        });
    }

    return(
        <div className='text-center'>
            <h1>Login</h1>
            <div className='container'>
                {hasLoginFailed && <div className='alert alert-warning'>로그인 실패</div>}
                {showSuccessMessage && <div>Login Successful</div>}
                UserName : <input type='text' name='username' value={username} onChange={nameChange} />
                Password : <input type='password' name='password' value={password} onChange={passwordChange} />
                <button onClick={loginClicked}>Login</button>
                <button onClick={admin}>Admin</button>
            </div>
        </div>
    )

};

export default Login;