import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Pagination({ postPerPage, totalPost, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }
    const [currentPage, setCurrentPage] = useState(1);

    const handleBack = (paginate) => {
        console.log('avx');
    };

    return (
        <ul className={cx('cover-btn-pagination')}>
            <FontAwesomeIcon icon={faAngleLeft} onClick={handleBack} />
            {pageNumbers.map((page, i) => {
                return (
                    <li className={cx('btn-pagination')} key={i}>
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
            <FontAwesomeIcon icon={faAngleRight} />
        </ul>
    );
}

export default Pagination;
