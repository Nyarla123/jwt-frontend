import axios from 'axios';

export const executeJwtAuthenticationService = (username, password) => {

    return axios.post('http://localhost:8080/login', {
        username,
        password
    });
};

export const executeHelloService = () => {

    console.log("===Hello===");
    return axios.get('http://localhost:8080/api/hello');

};


export const registerSuccessfulLoginForJwt = (username, jwtToken) => {

    console.log("===registerSuccessfulLoginForJwt start")
    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('authenticatedUser', username);
    console.log('===registerSuccessfulLoginForJwt end')
    setupAxiosInterceptors();

}

export const setupAxiosInterceptors = () => {
    console.log("setupAxiosInterceptors Start")
    axios.interceptors.request.use(
        config => {
            console.log('config start');
            const jwtToken = localStorage.getItem('jwtToken');
            console.log(jwtToken);
            if (jwtToken) {
                config.headers['Authorization'] = jwtToken;
                console.log(config);
                return config;
            }
        },
        error => {
            console.log("setupAxiosInterceptors error");
            return Promise.reject(error);
        });
};

export const logout = () => {

    localStorage.removeItem("jwtToken");
    localStorage.removeItem("authenticatedUser");

};

export const isUserLoggedIn = () => {

    const jwtToken = localStorage.getItem('jwtToken');
    console.log("=== UserloggedInCheck ===");
    console.log(jwtToken);
    if (jwtToken) {
        return true;
    }
    return false;

};

export const getLoggedInUserName = () => {

    let user = localStorage.getItem('authenticatedUser');
    if(user === null)
        return '';
    return user;

}

export const createJwtToken = (jwtToken) => {

    return 'Bearer=' + jwtToken;

}

/* 회원가입 API */
export const regist = async (username, password) => {
    let result = false;

    await axios.post('http://localhost:8000/api/save', {
        username,
        password,
    }).then(res => {
        result = true;
    }, error => {
        alert('회원가입에 실패했습니다.');
    });
    return result;
};
