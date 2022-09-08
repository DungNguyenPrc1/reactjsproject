import styles from './Route.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faCropAlt } from '@fortawesome/free-solid-svg-icons';

import axios from '~/utils/request';
import { useState, useEffect } from 'react';
import Pagination from '~/components/Pagination';
import Table from '~/components/Table';
import FilterButton from '~/components/Table/FilterButton';
import FilterTable from '~/components/Table/FilterTable';
import ModalExport from './ModalExport';

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
    const [totalPosts, setTotalPosts] = useState(0);
    const [dataFilter, setDataFilter] = useState({});
    const [totalPages, setTotalPages] = useState(1);
    //logical filter
    const [filterActive, setFilterActive] = useState(false);
    // logical Modal
    const [isOpenExport, setIsOpenExport] = useState(false);

    const paginate = (currentPage, postPerPage) => {
        setCurrentPage(currentPage);
        setPostPerPage(postPerPage);
    };

    const fetchData1 = async (id) => {
        console.log(id);
        setLoading(true);
        let response = await axios.get(`https://flexioapi.afi.dev/api/routes/export/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
            withCredentials: true,
        });
    };

    // const exportData = async () => {
    //     try {
    //         let response = await axios.get(`https://flexioapi.afi.dev/api/routes/export`, {
    //             headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
    //             withCredentials: true,
    //         });
    //         console.log('export', response);
    //     } catch (error) {
    //         console.log('some thing wrong');
    //     }
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let response = await axios.get(`/admin/routes?page=${currentPage}&pageSize=${postPerPage}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
                    withCredentials: true,
                });

                setLists(response?.data.data);
                setTotalPosts(response?.data.metadata.totalItems);
                setLoading(false);
                setTotalPages(response?.data.metadata.totalPages);
            } catch (error) {
                console.log('some thing wrong');
            }
            // console.log(response);
        };

        fetchData();
    }, [currentPage, postPerPage]);

    // const handleFilter = (e) => {
    //     e.preventDefault();
    // };

    const onChangeValue = (type, value) => {
        setDataFilter({
            ...dataFilter,
            [type]: value,
        });
    };
    // console.log('dataFilter', dataFilter);

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
                        className={cx('btn-filter')}
                    />

                    <button className={cx('route-btn-custom')} onClick={() => setIsOpenExport(true)}>
                        <span>Export</span>
                        <span>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </span>
                    </button>
                    <button className={cx('route-btn-custom')}>
                        <span>Import</span>
                        <span>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </span>
                    </button>
                    <button className={cx('route-btn-custom-exc')}>
                        <span>Create New Job</span>
                        <span>
                            <FontAwesomeIcon icon={faCropAlt} />
                        </span>
                    </button>
                </div>
            </div>
            <FilterTable
                onChangeValue={onChangeValue}
                dataFilter={dataFilter}
                active={filterActive}
                // handleFilter={handleFilter}
            />

            <Table headerTable={titleTable} postsTable={lists} loading={loading} getItemId={fetchData1} />
            {totalPosts > 0 && <Pagination totalPages={totalPages} totalPosts={totalPosts} paginate={paginate} />}
            <ModalExport open={isOpenExport} onClose={() => setIsOpenExport(false)} />
        </div>
    );
}

export default Route;
