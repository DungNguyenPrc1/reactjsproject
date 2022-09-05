import styles from './Modal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Modal() {
    return <div className={cx('wrapper')}>ABC</div>;
}

export default Modal;
