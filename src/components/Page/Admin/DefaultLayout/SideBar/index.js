import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import { BiMenu, BiUserCircle, BiMessageAltDetail } from 'react-icons/bi';
import { AiOutlineSetting, AiOutlineNotification } from 'react-icons/ai';

import { FaHistory, FaNewspaper } from 'react-icons/fa';

import Menu from '~/components/Page/Menu';

const cx = classNames.bind(styles);
const MENU_ITEM = [
    { id: 0, icon: <BiMenu />, title: 'Dashboard', path: '/admin' },
    { id: 1, icon: <FaNewspaper />, title: 'Active Job', path: '/admin/route' },

    { id: 2, icon: <FaHistory />, title: 'History', path: '/admin/history' },
    { id: 3, icon: <FaNewspaper />, title: 'Clients', path: '/admin/client' },
    {
        submenu: 0,
        icon: <BiUserCircle />,
        title: 'Users',
        children: [
            {
                id: 0,
                title: 'Client',
                path: '/admin/users/clients',
            },
            {
                id: 1,
                title: 'Territory',
                path: '/admin/users/territories',
            },

            {
                id: 2,
                title: 'Driver',
                path: '/admin/users/drivers',
            },
            {
                id: 3,
                title: 'Admin',
                path: '/admin/users/admins',
            },
        ],
    },

    { id: 5, icon: <BiMessageAltDetail />, title: 'Message' },
    { id: 6, icon: <AiOutlineNotification />, title: 'Notifications' },
    {
        id: -1,
        icon: <AiOutlineSetting />,
        title: 'Setting',
        children: [
            {
                id: 0,
                title: 'Territories',
            },
            {
                id: 1,
                title: 'Package Types',
            },

            {
                id: 2,
                title: 'Vehicle Categories',
            },
            {
                id: 3,
                title: 'Services',
            },
        ],
    },
];

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <Menu classname={cx('menu-item')} primary items={MENU_ITEM} />
        </div>
    );
}

export default SideBar;
