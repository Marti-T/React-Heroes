import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';


export const PrivateRoute = ({ children }) => { // Children es un higher order component, que son los componentes que va a recibir el PrivateRoutes

    const { logged } = useContext( AuthContext ); // Es para saber si un usuario está autenticado o no, que lo sabemos gracias al useContext que ya tenemos implementado
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return( logged )
    ? children
    : <Navigate to="/login" />
}