import React, { useState, useEffect } from 'react';
import { AccountService } from '../../services/accountService';
import { useHistory } from 'react-router-dom';

function LoggedArea() {

    const [ users, setUsers ] = useState([]);

    let history = useHistory();
 
    function deslogar() {
        AccountService.deslogar(); 
        history.push('/login');
    }

    useEffect(() => {

        async function loadUsers() {
            var resp = await AccountService.getAll();
            setUsers(resp);
        }
        loadUsers();

    }, []);
 
    return (
        <div>
            <h1>Área Logada</h1>
            <button onClick={deslogar}>Deslogar</button>
            <ul>
                {users.map(item => <li key={item.id}>{item.username}</li>)}
            </ul>
        </div>
    )
}

export default LoggedArea;