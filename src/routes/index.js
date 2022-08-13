import History from '~/components/History';
import Main from '~/components/Main';
import { DefaultLayout } from '~/components/Page';
import Admin from '~/components/Page/Admin';
import Route from '~/components/Page/Route';
// import RequireAuth from '~/components/RequireAuth/RequireAuth';

const publicRoutes = [{ path: '/', component: Main, layout: null }];

const privateRoutes = [
    { path: '/admin', component: Admin, layout: DefaultLayout },
    { path: '/admin/route', component: Route, layout: DefaultLayout },
    { path: '/admin/history', component: History, layout: DefaultLayout },
];
export { publicRoutes, privateRoutes };
