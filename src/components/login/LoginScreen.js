import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Isai'
            }
        });
        history.replace( lastPath );
    }
    
    return (
        <div className="container mt-5 text-center">
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Iniciar Sesion
            </button>
        </div>
    )
}
