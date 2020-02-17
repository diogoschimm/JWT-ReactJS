import api, { apiJwt } from "./api";
import { LocalStorageService } from './localStorageService';

const key = 'authentication';

export const AccountService = {

    logar: async function(username, password) { 

        var response = await api.post('/account/Login', { username, password });
        if (response.data.sucesso) {

            const autenticacao = { 
                isAuthenticated: true, 
                data: response.data 
            };
            LocalStorageService.save(key, autenticacao);

            return autenticacao; 
        }

        return { 
            isAuthenticated: false, 
            data: response.data
        };
    },  

    deslogar: function() {
        LocalStorageService.remove(key);
    },

    getAutenticacao: function() {
        return LocalStorageService.get(key);
    }, 

    loggedIn: function() {
        const result = this.getAutenticacao();
        return result && result.isAuthenticated;
    },


    getAll: async function() {

        var api = apiJwt();
 
        var response = await api.get('/account/getAll'); 
        return response.data;
    }, 

    createAccount: async function(username, password) {
        var response = await api.post('/account/create', {
            username, password, role: 'manager'
        });

        return response.data;
    }
    
}
