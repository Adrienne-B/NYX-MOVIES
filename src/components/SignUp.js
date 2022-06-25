import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/images/img_avatar.png';
function SignUp() {
    const navigate = useNavigate();
    const [uName, setUName] = useState('');
    const [uPassword, setUPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = () => {
        if (uName && uPassword) {
            localStorage.setItem('userName', uName);
            localStorage.setItem('password', uPassword);
            navigate('/');
            setErrorMessage('');
            setIsModalOpen(false);
        } else {
            setErrorMessage('Please enter username and password');
        }
    };
    return (
        <div className="login-container">
            {isModalOpen && (
                <div id="id01" className="modal">
                    <h1 className="sign-up-title">SignUp</h1>
                    <div className="modal-content animate">
                        <div className="imgcontainer">
                            <span
                                onClick={() => {
                                    setIsModalOpen(false);
                                    navigate('/');
                                }}
                                className="close"
                                title="Close Modal"
                            >
                                &times;
                            </span>
                            <img src={avatar} alt="Avatar" className="avatar" width="100" />
                        </div>

                        <div className="container">
                            <label htmlFor="uname">
                                <b>Username</b>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                name="uname"
                                required
                                value={uName}
                                onChange={e => setUName(e.target.value)}
                            />

                            <label htmlFor="psw">
                                <b>Password</b>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="psw"
                                required
                                value={uPassword}
                                onChange={e => setUPassword(e.target.value)}
                            />

                            <button className="sign-up" type="submit" onClick={handleLogin}>
                                Signup
                            </button>
                            <label htmlFor="error" className="error-message">
                                {errorMessage}
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUp;
