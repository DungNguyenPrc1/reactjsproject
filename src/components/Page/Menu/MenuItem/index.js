import styles from '~/components/Page/Menu/Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const classes = cx('wrapper');

    return (
        <div className={classes}>
            <span>{data.icon}</span>
            <span>{data.title}</span>
            {/* <Button primary className={classes} onClick={onClick} leftIcon={data.icon}>
                {data.title}
            </Button> */}
        </div>
    );
}
export default MenuItem;
