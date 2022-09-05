import styles from '~/components/History/History.module.scss';
import classNames from 'classnames/bind';
import FilterButton from '../Table/FilterButton';
import FilterTable from '../Table/FilterTable';
import Table from '../Table';
import axios from '~/utils/request';

import { useState, useEffect } from 'react';
import Pagination from '../Pagination';

const cx = classNames.bind(styles);

function History() {
    const [activeFilter, setActiveFilter] = useState(false);

    const titleTable = [
        { id: 1, title: 'ID' },
        { id: 2, title: 'Client' },
        { id: 3, title: 'Driver' },
        { id: 4, title: '# of pickup/s' },
        { id: 5, title: '# of drop-off/s' },
        { id: 6, title: '# of package/s' },
        { id: 7, title: 'Pickup At' },
        { id: 8, title: 'Service' },
        { id: 9, title: 'Min. Vehicle Type' },
        { id: 10, title: 'Created by' },

        { id: 13, title: 'Created at' },
        { id: 14, title: 'Status' },

        { id: 15, title: '' },
    ];
    const [postsHistory, setPostsHistory] = useState([]);

    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState();
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const axiosData = async () => {
            setLoading(true);
            let response = await axios.get(
                `routes/history?page=1&pageSize=10&filter[]=status||$eq||canceled,completed&pickupFilter={"status":["canceled","completed"]}`,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
                    withCredentials: true,
                },
            );
            setPostsHistory(response?.data.data);
            setTotalPosts(response?.data.metadata.totalItems);
            setTotalPages(response?.data.metadata.totalPages);
            setLoading(false);

            // console.log(post);
        };
        axiosData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p className={cx('title')}>HISTORY JOBS</p>
                <FilterButton onClick={() => console.log(setActiveFilter(!activeFilter))} active={activeFilter} />
            </div>
            <FilterTable active={activeFilter} />
            <Table headerTable={titleTable} postsHistory={postsHistory} loadingHistory={loading} />

            {totalPosts > 0 && <Pagination totalPages={totalPages} paginate={paginate} totalPosts={totalPosts} />}
        </div>
    );
}

export default History;
