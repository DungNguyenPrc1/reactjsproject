import styles from './LogOut.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function LogOut() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };
    return (
        <div>
            <div className={cx('wrapper')}>
                <div>API KEY</div>
                <div>Settings</div>
                <div onClick={handleLogout}>
                    <span>Log out</span>
                    <span>
                        <AiOutlineLogout />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LogOut;
