import styles from '~/components/Page/Menu/Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item');
    // console.log(data);

    return (
        <div>
            <Button primary className={classes} onClick={onClick} leftIcon={data.icon}>
                {data.title}
            </Button>
            {/* <Button primary className={classes} onClick={onClick} leftIcon={data.icon}>
                {data.children.title}
            </Button> */}
        </div>
    );
}
export default MenuItem;
