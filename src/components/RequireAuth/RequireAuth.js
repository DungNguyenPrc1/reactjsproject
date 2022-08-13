import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {
    let auth = { auth: true };
    return auth.auth ? <Outlet /> : <Navigate to="/" />;
}

export default RequireAuth;
