import axios from "axios";

export const adminTest = () => {

    const username = localStorage.getItem('authenticatedUser')

    console.log('Admin Test', username);
    const response = axios.get('http://localhost:8080/api/admin')

    return response;
};