import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '~/asset/images/logomau.svg';
import LogOut from '~/components/Main/LogOut';
import Tippy from '@tippyjs/react/headless';

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
                    src="https://cdn.dribbble.com/users/246068/screenshots/15294543/hi_1_4x.gif?compress=1&resize=400x300"
                />

                <div className={cx('infor')}>
                    <p className={cx('name')}>Nguyen Quoc Dung</p>
                    <div>
                        <Tippy
                            placement="left"
                            interactive
                            delay={300}
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <LogOut />
                                </div>
                            )}
                        >
                            <span className={cx('user-name')}>Dung Nguyen</span>
                        </Tippy>
                    </div>
                    {/* <span className={cx('logout')}>
                        <LogOut />
                    </span> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
