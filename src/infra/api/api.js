import axios from "axios";

const axiosDefault = axios.create({
    baseURL: "http://localhost:1336/",
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json'  
    }
});

/**
    * Aqui é onde é adicionadoo token do usuário nas requisições a serem feitas pelo client,
    * caso não haja autenticação por token, favor remover essa sessão 
*/

axiosDefault.interceptors.request.use(
    async reqConfig => {
        try {
            /**
             * Caso haja um token, ele deve ser recuperado aqui, dos cookies e adicionado na requisição
             */
            
            let authToken = '';

            reqConfig.headers['Authorization'] = `Bearer ${authToken}`;
        } catch (err) {
            return Promise.reject(err);
        }

        return reqConfig;
    },

    err => Promise.reject(err)
);

export default axiosDefault;