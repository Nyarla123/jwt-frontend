import axios from 'axios';

export const executeJwtAuthenticationService = (username, password) => {

    return axios.post('http://localhost:8080/login', {
        'username' : username,
        'password' : password
    });
};

export const executeHelloService = () => {

    console.log("===Hello===");
    return axios.get('http://localhost:8080/api/hello');

};

export const registerSuccessfulLoginForJwt = (username, jwtToken) => {

    console.log("===registerSuccessfulLoginForJwt===")
    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('authenticatedUser', username);
    setupAxiosInterceptors();

}

export const createJwtToken = (jwtToken) => {

    return 'Bearer=' + jwtToken;

}

export const setupAxiosInterceptors = () => {
    console.log("setupAxiosInterceptors Start")
    axios.interceptors.request.use(
        config => {
            console.log("config");
            const jwtToken = localStorage.getItem('jwtToken');
            if (jwtToken) {
                config.headers['Authorization'] = 'Bearer=' + jwtToken;
            }

            return config;
        },
        error => {
            console.log("setupAxiosInterceptors");
            Promise.reject(error)
        });

};

export const logout = () => {

    localStorage.removeItem("authenticatedUser");
    localStorage.removeItem("jwtToken");

};

export const isUserLoggedIn = () => {

    const jwtToken = localStorage.getItem('jwtToken');
    console.log("===UserloggedInCheck===");
    console.log(jwtToken);
    if (jwtToken) {
        return true;
    }

    return false;

};

export const getLoggedInUserName = () => {

    let user = localStorage.getItem('authenticatedUser');
    if(user===null) return '';
    return user;

}

export const request = options => {

};
