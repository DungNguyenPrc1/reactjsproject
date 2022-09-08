import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Pagination({ totalPages, totalPosts, paginate }) {
    const [currentPages, setCurrentPages] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    console.log('testing ', currentPages);

    const handlePageClick = (e) => {
        setCurrentPages(e.selected + 1);
    };
    paginate(currentPages, postPerPage);
    // paginate = (currentPages, postPerPage) => {
    //     console.log('avc111');
    // };
    return (
        <footer className={cx('footer')}>
            <div className="flex">
                <p>{totalPosts > 0 ? totalPosts : ''} </p>
                <span>Active Jobs</span>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< "
                renderOnZeroPageCount={null}
                containerClassName={cx('wrapper-paginate')}
                pageLinkClassName={cx('wrapper-pageLink')}
                previousLinkClassName={cx('wrapper-changepage')}
                nextLinkClassName={cx('wrapper-changepage')}
                activeLinkClassName={cx('active-pagination')}
                disabledClassName={cx('disable')}
                activeClassName={cx('activeNumber')}
            />

            <select onChange={(e) => setPostPerPage(e.target.value)} className={cx('select-btn')}>
                <option value="10">10/Page</option>
                <option value="20">20/Page</option>
                <option value="50">50/Page</option>
                <option value="100">100/Page</option>
            </select>
        </footer>
    );
}

export default Pagination;
