import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCircleUser, faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import Menu from '~/components/Page/Menu';

const cx = classNames.bind(styles);
const MENU_ITEM = [
    { id: 0, icon: <FontAwesomeIcon icon={faRegistered} />, title: 'Dashboard', path: '/admin' },
    { id: 1, icon: <FontAwesomeIcon icon={faPaperPlane} />, title: 'Active Job', path: '/admin/route' },

    { id: 2, icon: <FontAwesomeIcon icon={faCircleUser} />, title: 'History', path: '/admin/history' },
    { id: 3, icon: <FontAwesomeIcon icon={faCircleUser} />, title: 'Clients', path: '/admin/client' },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Users',
        children: [
            {
                id: 1,
                title: 'Client',
                path: '/admin/user/client',
            },
            {
                id: 2,
                title: 'Territory',
                path: '/admin/user/territory',
            },

            {
                id: 3,
                title: 'Driver',
                path: '/admin/user/driver',
            },
            {
                id: 4,
                title: 'Admin',
                path: '/admin/user/admins',
            },
        ],
    },

    { id: 5, icon: <FontAwesomeIcon icon={faMessage} />, title: 'Message' },
    { id: 6, icon: <FontAwesomeIcon icon={faBell} />, title: 'Notifications', path: '/admin/notification' },
    {
        id: 7,
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'Setting',
        children: [
            {
                id: 1,
                title: 'Territories',
            },
            {
                id: 2,
                title: 'Package Types',
            },

            {
                id: 3,
                title: 'Vehicle Categories',
            },
            {
                id: 4,
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
