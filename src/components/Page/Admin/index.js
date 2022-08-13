import styles from './Admin.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Admin() {
    return (
        <div className={cx('wrapper')}>
            <h1> This is DashboardPage </h1>
        </div>
    );
}

export default Admin;
