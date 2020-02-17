import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import imgBackgroundWrapper from '../../../assets/images/bg-images/bg3.jpg';
import { AccountService } from '../../../services/accountService';

function CreateAccount(props) {

    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ sendMeNewsLetter, setSendMeNewsLetter ] = useState(true);

    let history = useHistory();

    const criarContaHandler = () => {
        AccountService.createAccount(username, password);
        history.push('/login')
    }

    return (
        <div className="auth-wrapper aut-bg-img" style={styles.authWrapper}>
            <div className="auth-content">
                <div className="text-white">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-user-plus auth-icon"></i>
                        </div>
                        <h3 className="mb-4">Sign up</h3>
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Username" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
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
                                    name="checkbox-fill-2" 
                                    id="checkbox-fill-2" 
                                    checked={sendMeNewsLetter}
                                    onChange={(e) => setSendMeNewsLetter(e.target.checked)}
                                />
                                <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href="#!" className="text-white"> Newsletter</a> weekly.</label>
                            </div>
                        </div>
                        <button className="btn btn-primary shadow-2 mb-4" onClick={criarContaHandler}>Sign up</button>
                        <p className="mb-0 text-muted">Allready have an account? <Link to="/login" className="text-white"> Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    authWrapper: {
        backgroundImage: `url('${imgBackgroundWrapper}')`
    }
};

export default CreateAccount;