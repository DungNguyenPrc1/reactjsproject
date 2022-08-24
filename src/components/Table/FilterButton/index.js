import styles from './FilterButton.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function FilterButton({ onClick, active, className, ...passProps }) {
    const props = {
        onClick,
        ...passProps,
    };
    const classes = cx('wrapper', { [className]: className, active });
    return (
        <div>
            <button className={classes} {...props}>
                Filter <FontAwesomeIcon icon={faFilter} />
            </button>
        </div>
    );
}

export default FilterButton;
