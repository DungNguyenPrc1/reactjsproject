import History from '~/components/History';
import Main from '~/components/Main';
import { DefaultLayout } from '~/components/Page';
import Admin from '~/components/Page/Admin';
import Company from '~/components/Page/Company';
import Route from '~/components/Page/Route';
import EditClients from '~/components/Page/Company/EditClients';
import CreateClient from '~/components/Page/Company/CreateClient';
import UserClient from '~/components/User/Client';
import EditUserClients from '~/components/User/Client/EditUserClients';
import CreateUserClient from '~/components/User/Client/CreateUserClient';
import Territory from '~/components/User/Client/Territory';
import Driver from '~/components/User/Client/Driver';
import AdminUser from '~/components/User/Client/AdminUser';
// import EditUserClients from '~/components/User/Client/EditClients';
// import RequireAuth from '~/components/RequireAuth/RequireAuth';

const publicRoutes = [{ path: '/', component: Main, layout: null }];

const privateRoutes = [
    { path: '/admin', component: Admin, layout: DefaultLayout },
    { path: '/admin/route', component: Route, layout: DefaultLayout },
    { path: '/admin/history', component: History, layout: DefaultLayout },
    { path: '/admin/client', component: Company, layout: DefaultLayout },
    { path: '/admin/client/:id', component: EditClients, layout: DefaultLayout },
    { path: '/admin/client/new', component: CreateClient, layout: DefaultLayout },
    { path: '/admin/users/clients', component: UserClient, layout: DefaultLayout },
    { path: '/admin/users/clients/:id', component: EditUserClients, layout: DefaultLayout },
    { path: '/admin/users/clients/new', component: CreateUserClient, layout: DefaultLayout },
    { path: '/admin/users/territories', component: Territory, layout: DefaultLayout },
    { path: '/admin/users/drivers', component: Driver, layout: DefaultLayout },
    { path: '/admin/users/admins', component: AdminUser, layout: DefaultLayout },
];
export { publicRoutes, privateRoutes };
