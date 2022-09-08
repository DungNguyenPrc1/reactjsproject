import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '~/components/Context/AuthProvider';

function RequireAuth() {
    const auth = useAuth();
    return auth.user ? <Outlet /> : localStorage.getItem('user') ? <Outlet /> : <Navigate to="/" />;
}

export default RequireAuth;
