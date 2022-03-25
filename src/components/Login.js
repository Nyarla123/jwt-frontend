import React,{useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {
     // adminTest,
    executeHelloService,
    executeJwtAuthenticationService,
    registerSuccessfulLoginForJwt,
    login
} from "../apis/authApi";

const Login = () => {

    const [username, setUsername] = useState( '');
    const [password, setPassword] = useState("");
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const history = useHistory();

    const nameChange = (e) => {
        setUsername(e.target.value);
    };
    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    // 아이디 비밀번호 리셋
    const resetNameAndPassword = () => {
        setUsername('');
        setPassword('');
    };

    // 로그인 로직
    const loginClicked = () => {
        executeJwtAuthenticationService(username, password)
            .then((response) => {
                console.log(response);
                console.log(response.headers.authorization);
                console.log(localStorage);
                setShowSuccessMessage(true);
                registerSuccessfulLoginForJwt(username, response.headers.authorization);
                console.log(jwtToken);
                resetNameAndPassword();
                setHasLoginFailed(false);
                history.push('/');
            }).catch((error) => {
            console.log(error);
            setHasLoginFailed(true);
            resetNameAndPassword();
        });
    };

    const Hello = () => {
        executeHelloService().then((response) => {
            console.log(response);
            console.log(response.data);
        });
    };

    return(
        <div className='outer text-center'>
            <div className='inner'>
                <div>
                    <h3>로그인</h3>
                    {hasLoginFailed && <div className='alert alert-warning'>로그인 실패</div>}
                    {showSuccessMessage && <div>Login Successful</div>}
                    <div className="form-group">
                        <label>아이디</label>
                        <input
                            className='form-control'
                            type='text'
                            name='username'
                            value={username}
                            onChange={nameChange}
                            placeholder='아이디'
                        />
                    </div>
                    <div className="form-group">
                        <label>비밀번호</label>
                        <input
                            className='form-control'
                            type='password'
                            name='password'
                            value={password}
                            onChange={passwordChange}
                            placeholder='비밀번호'/>
                    </div>
                    <button className="btn btn-dark btn-lg btn-block" onClick={loginClicked}>Login</button>
                    <button className="btn btn-dark btn-lg btn-block" onClick={Hello}>Hello Test</button>
                </div>
            </div>
        </div>
    );
};

export default Login;

