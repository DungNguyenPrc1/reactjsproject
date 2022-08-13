import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '~/asset/images/logomau.svg';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <img src={logo} alt="errologo" className={cx('logo')} />
            <p className={cx('title')}>FLEXIO ADMIN DASHBOARD</p>
            <div className={cx('infor-content')}>
                <img
                    className={cx('avt')}
                    alt="abc"
                    src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/279193907_3189596294631290_3631323741133133854_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=nNqTIDPHK1IAX-E-0n3&_nc_oc=AQmUDOoFTsVrLtLxPwS2i9FHejLx6D7wHGK5Qeyxq49BYz0rVODRO6XQqLNbj1f3FE7RfJ5DCzjfRnPULbho2We8&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT8844DMFeQw8xcscUkLS6gYRFPOIKD2_hjVfjbNXNkz6Q&oe=62DDCFBD"
                />

                <div className={cx('infor')}>
                    <p className={cx('name')}>Nguyen Quoc Dung</p>
                    <span className={cx('user-name')}>Dung Nguyen</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
