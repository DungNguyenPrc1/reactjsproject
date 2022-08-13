import styles from './FilterButton.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function FilterButton({ onClick, active }) {
    const handleClick = () => {
        return onClick();
    };
    return (
        <div>
            <button onClick={handleClick} className={cx('wrapper', { active })}>
                Filter <FontAwesomeIcon icon={faFilter} />
            </button>
        </div>
    );
}

export default FilterButton;
