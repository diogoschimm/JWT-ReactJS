import axios from 'axios'; 
import { AccountService } from './accountService';
 
const api = axios.create({
    baseURL: 'http://localhost:63491/v1' 
})
 
export function apiJwt() {
    var autenticacao = AccountService.getAutenticacao();
    if (autenticacao && autenticacao.isAuthenticated) {
        api.defaults.headers.common['Authorization'] = `Bearer ${autenticacao.data.token.token}` ;
    } 
    return api; 
}

export default api;
