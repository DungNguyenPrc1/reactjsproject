import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
import { useState, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const reducer = (state, action) => {
    switch (action.type) {
        case 'decrement':
            return { page: state.page - 1 };
        case 'increase':
            return { page: state.page + 1 };
        default:
            return state;
    }
};

function Pagination({ postPerPage, totalPost, paginate }) {
    const [state, dispatch] = useReducer(reducer, { page: 1 });
    const [currentPage, setCurrentPage] = useState(1);
    // console.log('abc', state, { page });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleBack = (e) => {
        // console.log(e.target);
        // dispatch({ type: 'decrement' });
    };
    const handleNext = (e) => {
        // onChangePage('page', e.target.value);
        // dispatch({ type: 'increase' });
    };

    return (
        <ul className={cx('cover-btn-pagination')}>
            <button disabled={state.currentPage <= 1} onClick={handleBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            {pageNumbers.map((page, i) => {
                return (
                    <li className={cx('btn-pagination')} key={i}>
                        {/* {setCurrentPage(page)} */}
                        <a
                            onClick={() => {
                                return paginate(page);
                            }}
                            href="##"
                        >
                            {page}
                        </a>
                    </li>
                );
            })}
            <button disabled={state.currentPage > pageNumbers.length} onClick={handleNext}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </ul>
    );
}

export default Pagination;
