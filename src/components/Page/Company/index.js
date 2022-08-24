import axios from '~/utils/request';
import styles from './Company.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import '~/components/Page/Company/Company.css';
import Table from '~/components/Table';
import FilterButton from '~/components/Table/FilterButton';
import FilterTable from '~/components/Table/FilterTable';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Company() {
    const handlePageClick = (e) => {
        // console.log(e.selected);
        setCurrentPage(e.selected + 1);
    };

    const titleTable = [
        { id: 1, title: 'ID' },
        { id: 2, title: 'Company Name' },
        { id: 3, title: 'Email Address' },
        { id: 4, title: 'Phone Number' },
        { id: 5, title: 'Support Phone Number' },
        { id: 6, title: '' },
    ];

    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        dataAxios();
    }, [currentPage, itemsPerPage]);
    const dataAxios = async () => {
        let response = await axios.get(`/admin/clients?page=${currentPage}&pageSize=${itemsPerPage}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
            withCredentials: true,
        });
        setTotalItems(response?.data?.metadata?.totalItems);
        setItemsPerPage(response?.data?.metadata?.itemsPerPage);
        setCurrentPage(response?.data?.metadata?.currentPage);
        setTotalPages(response?.data?.metadata?.totalPages);

        setData(response?.data?.data);
    };

    const deleteItem = async (id) => {
        const deleteAxios = await axios.delete(`/admin/clients/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
            withCredentials: true,
        });
        dataAxios();
    };

    return (
        <div>
            <div className="flex justify-between my-4">
                <span className="text-primary font-bold text-2xl">CLIENTS</span>
                <div className="flex justify-center">
                    <FilterButton />
                    <Link to="/admin/client/new">
                        <button className="flex border bg-primary text-white px-6 py-3 font-bold ">
                            Create Client <FiPlus />
                        </button>
                    </Link>
                </div>
            </div>
            <FilterTable active={false} />
            <div>
                <Table headerTable={titleTable} postsClients={data} deleteItem={deleteItem} />
            </div>
            <footer className={cx('wrapper-footer')}>
                <span>ABC</span>
                <ReactPaginate
                    // className="flex "
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
                    activeLinkClassName={cx('paganate-active')}
                />
                <span>ABC</span>
            </footer>
        </div>
    );
}

export default Company;
