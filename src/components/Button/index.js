import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    children,
    border = false,
    popular,
    to,
    href,
    create,
    item = false,
    primary = false,
    className,
    leftIcon = false,
    rightIcon = false,
    onClick,
    ...passPros
}) {
    let Comp = 'button';
    const props = { onClick, ...passPros };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', { primary, popular, item, create, border, [className]: className });
    return (
        <Comp className={classes} {...props}>
            <span className={cx('main')}>
                {leftIcon && <span className={cx('leftIcon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>

                {rightIcon && <span className={cx('rightIcon')}>{rightIcon}</span>}
            </span>
        </Comp>
    );
}
export default Button;
