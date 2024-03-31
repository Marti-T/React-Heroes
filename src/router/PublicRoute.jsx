import { useContext } from 'react';
import { AuthContext } from '../auth/index';
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({ children }) => {
    const { logged } = useContext( AuthContext ); // Es para saber si un usuario está autenticado o no, que lo sabemos gracias al useContext que ya tenemos implementado

    return( !logged )
        ? children
        : <Navigate to="/marvel" />
}