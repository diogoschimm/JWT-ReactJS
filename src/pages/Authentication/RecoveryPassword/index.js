import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import imgBackground from '../../../assets/images/bg-images/bg3.jpg';

function RecoveryPassword() {

    const [ email, setEmail ] = useState('');
    
    function resetPasswordHandler() {

    }

    return (
        <div className="auth-wrapper aut-bg-img" style={styles.authWrapper}>
            <div className="auth-content">
                <div className="text-white">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-mail auth-icon"></i>
                        </div>
                        <h3 className="mb-4">Reset Password</h3>
                        <div className="input-group mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.vlue)}
                            />
                        </div>
                        <button className="btn btn-primary mb-4 shadow-2" onClick={resetPasswordHandler}>Reset Password</button>
                        <p className="mb-0 text-muted">Don’t have an account? <Link to="/login" className="text-white">Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    authWrapper: {
        backgroundImage: `url(${imgBackground})`
    }
};

export default RecoveryPassword;