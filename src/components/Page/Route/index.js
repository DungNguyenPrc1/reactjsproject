import styles from './Route.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowDown,
    faArrowUp,
    // faArrowUpRightFromSquare,
    faCropAlt,
    // faRoute,
    // faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import axios from '~/utils/request';
import { useState, useEffect } from 'react';
import Pagination from '~/components/Pagination';
import Table from '~/components/Table';
import FilterButton from '~/components/Table/FilterButton';
import FilterTable from '~/components/Table/FilterTable';

const cx = classNames.bind(styles);

function Route() {
    const titleTable = [
        { id: 1, title: 'ID' },
        { id: 2, title: 'Client' },
        { id: 3, title: 'Driver' },
        { id: 4, title: 'Rate' },
        { id: 5, title: '# of stops' },
        { id: 6, title: 'Pickup Date' },
        { id: 7, title: 'Pickup Time' },
        { id: 8, title: 'Distance' },
        { id: 9, title: 'Duration' },
        { id: 10, title: 'Min. Vehicle' },

        { id: 13, title: 'Status' },

        { id: 14, title: '' },
    ];

    const [lists, setLists] = useState([]);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const [totalPosts, setTotalPosts] = useState();
    const [dataFilter, setDataFilter] = useState({});
    // const [filteredResult, setFilteredResult] = useState([]);

    const [filterActive, setFilterActive] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let response = await axios.get(`/admin/routes?page=${currentPage}&pageSize=${postPerPage}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
                withCredentials: true,
            });

            setLists(response?.data.data);
            setTotalPosts(response?.data.metadata.totalItems);
            setLoading(false);
            console.log(response);
        };

        fetchData();
    }, [currentPage, postPerPage]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleFilter = (e) => {
        e.preventDefault();
        // switch (dataFilter[type]) {
        //     case 'id':
        //         const filteredData = lists.filter((list) => {
        //             list.id.toLowerCase().includes(dataFilter.id.toLowerCase());
        //         });
        //         setFilteredResult(filteredData);
        // }
        // const listsFilter = lists.filter((list) => {
        //     return list?.id?.toLowerCase().includes(dataFilter.id.toLowerCase());
        // console.log(list.id.toLowerCase().includes(dataFilter.id.toLowerCase()));

        // switch (dataFilter)
        // {
        //     case id:

        // }
        // });

        // console.log(filterData === {});
    };
    const onChangePage = (page, value) => {
        setCurrentPage({ ...currentPage, [page]: value });
    };

    const onChangeValue = (type, value) => {
        setDataFilter({
            ...dataFilter,
            [type]: value,
        });
    };
    console.log('dataFilter', dataFilter);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title')}>ACTIVE JOBS</div>

                <div className={cx('btn-header')}>
                    <FilterButton
                        active={filterActive}
                        onClick={() => {
                            setFilterActive(!filterActive);
                        }}
                    />
                    <Button normal className={cx('route-btn-custom')} rightIcon={<FontAwesomeIcon icon={faArrowUp} />}>
                        Import
                    </Button>
                    <Button
                        normal
                        rightIcon={<FontAwesomeIcon icon={faArrowDown} />}
                        className={cx('route-btn-custom')}
                    >
                        Export
                    </Button>
                    <Button
                        normal
                        rightIcon={<FontAwesomeIcon icon={faCropAlt} />}
                        className={cx('route-btn-custom-exc')}
                    >
                        Create New Job
                    </Button>
                </div>
            </div>
            <FilterTable
                onChangeValue={onChangeValue}
                dataFilter={dataFilter}
                active={filterActive}
                handleFilter={handleFilter}
            />

            <Table headerTable={titleTable} postsTable={lists} loading={loading} />

            <footer className={cx('footer')}>
                <p>{totalPosts} Active Jobs</p>
                <Pagination postPerPage={postPerPage} totalPost={totalPosts} paginate={paginate} />
                <select onChange={(e) => setPostPerPage(e.target.value)} className={cx('select-btn')}>
                    <option value="10">10/Page</option>
                    <option value="20">20/Page</option>
                    <option value="50">50/Page</option>
                    <option value="100">100/Page</option>
                </select>
                {/* <Select options={options} onChange={(value) => setPostPerPage(value.value)} /> */}
            </footer>
        </div>
    );
}

export default Route;
