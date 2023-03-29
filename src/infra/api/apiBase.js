import axios from "axios";

/**
 * Api base para operações sem token, login, cadastro, esqueci a senha...
 */

const axiosDefault = axios.create({
    baseURL: "http://localhost:1336/",
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosDefault;