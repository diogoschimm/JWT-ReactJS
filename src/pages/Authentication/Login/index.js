import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/fonts/fontawesome/css/fontawesome-all.min.css';
import '../../../assets/plugins/animation/css/animate.min.css';
import '../../../assets/css/style.css';
import '../../../assets/css/layouts/dark.css';

import imgBackgroundWrapper from '../../../assets/images/bg-images/bg3.jpg';
import { AccountService } from '../../../services/accountService';
 
function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [saveCredentials, setSaveCredentials] = useState(true);
 
    async function logarHandler() {
       const retorno = await AccountService.logar(email, password); 
       if (retorno.isAuthenticated) {
            props.history.push('/main');
       } else {
            alert(retorno.data.message);
       } 
    } 

    return ( 
        <div className="auth-wrapper aut-bg-img" style={styles.authWrapper}>
            <div className="auth-content">
                <div className="text-white">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon"></i>
                        </div>
                        <h3 className="mb-4 text-white">Login</h3>
                        <div className="input-group mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-4">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group text-left">
                            <div className="checkbox checkbox-fill d-inline">
                                <input 
                                    type="checkbox" 
                                    name="checkbox-fill-1" 
                                    id="checkbox-fill-a1" 
                                    value="1"
                                    checked={saveCredentials}
                                    onChange={(e) => setSaveCredentials(e.target.checked)}
                                />
                                <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                            </div>
                        </div>
                        <button className="btn btn-primary shadow-2 mb-4" onClick={logarHandler}>Login</button>
                        <p className="mb-2 text-muted">Forgot password? <Link to="/recoveryPassword" className="text-white">Reset</Link></p>
                        <p className="mb-0 text-muted">Don’t have an account? <Link to="/createAccount" className="text-white">Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    authWrapper: {
        backgroundImage: `url('${imgBackgroundWrapper}')`
    }
};

export default Login;