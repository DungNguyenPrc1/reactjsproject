import styles from './Client.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import axios from '~/utils/request';
import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineArrowRight, AiOutlineUpload } from 'react-icons/ai';

import FilterButton from '~/components/Table/FilterButton';

import Table from '~/components/Table';

import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);

function UserClient() {
    const titleTable = [
        { id: 1, title: 'ID' },
        { id: 2, title: 'First Name' },
        { id: 2, title: 'Last Name' },
        { id: 3, title: 'Email' },
        { id: 3, title: 'Role' },
        { id: 4, title: 'Phone Number' },
        { id: 5, title: 'Client' },
        { id: 6, title: '' },
    ];
    const [dataUserClient, setDataUserClient] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const paginate = (pagenumber, postPerPage) => {
        setCurrentPage(pagenumber);
        setPostPerPage(postPerPage);
    };
    const deleteItem = async (id) => {
        const deleteAxios = await axios.delete(`/admin/clients/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
            withCredentials: true,
        });
        // dataAxios();
    };
    useEffect(() => {
        const dataAxios = async () => {
            const response = await axios.get(`/admin/users?group=client&page=${currentPage}&pageSize=${postPerPage}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
                withCredentials: true,
            });
            setTotalPages(response?.data?.metadata?.totalPages);
            setTotalPosts(response?.data?.metadata?.totalItems);
            setDataUserClient(response?.data?.data);
            // console.log('nest', totalPosts);
        };

        dataAxios();
    }, [currentPage, postPerPage]);
    return (
        <div>
            {/* <EditUserClients fullData={dataUserClient} />; */}
            <div className="flex justify-between my-4">
                <span className="flex font-bold text-2xl">
                    <span>USER</span>
                    <span className="px-4">
                        <AiOutlineArrowRight />
                    </span>
                    <span className="text-primary">CLIENTS</span>
                </span>
                <div className="flex justify-center">
                    <button className={cx('btn-upload')}>
                        <span className=" text-primary font-bold text-2xl">Export</span>

                        <span className="text-primary mx-2 text-2xl">
                            <AiOutlineUpload />
                        </span>
                    </button>
                    <FilterButton className={cx('btn-filter')} />

                    <Link to="/admin/user/client/new">
                        <button className={cx('btn-create')}>
                            Create Client User <FiPlus />
                        </button>
                    </Link>
                </div>
            </div>
            <Table headerTable={titleTable} className={cx('customize-table')} postUserEdit={dataUserClient} />

            <Pagination totalPages={totalPages} totalPosts={totalPosts} paginate={paginate} />
        </div>
    );
}

export default UserClient;
