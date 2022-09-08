import styles from './AdminUser.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { BiExport } from 'react-icons/bi';
import Button from '~/components/Button';
import FilterButton from '~/components/Table/FilterButton';
import Table from '~/components/Table';
import { useEffect, useState } from 'react';
import exportApi from '~/utils/exportApi';
import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);

function AdminUser() {
    const tableId = [
        { id: 1, title: 'ID' },
        { id: 2, title: 'First Name' },
        { id: 3, title: 'Last Name' },
        { id: 4, title: 'Email' },
        { id: 5, title: 'Role' },
        { id: 6, title: 'Phone Number' },
        { id: 7, title: '' },
    ];
    const [dataClient, setDataClient] = useState([]);
    const [metaDataClient, setMetaDataClient] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    console.log(metaDataClient);

    const paginate = (pageNumber, postPerPage) => {
        setCurrentPage(pageNumber);
        setPostPerPage(postPerPage);
    };

    useEffect(() => {
        const axiosData = async () => {
            try {
                setLoading(true);
                const params = {
                    group: 'flexio',
                    page: `${currentPage}`,
                    pageSize: `${postPerPage}`,
                };
                const response = await exportApi.getUsersAdmins(params);
                setDataClient(response.data.data);
                setMetaDataClient(response.data.metadata);
                setLoading(false);

                console.log(response.data);
            } catch (error) {
                console.log('error ne', error);
            }
        };
        axiosData();
    }, [currentPage, postPerPage]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-title')}>
                    <span>USERS</span>
                    <span>
                        <AiOutlineArrowRight />
                    </span>
                    <span>ADMINS</span>
                </div>
                <div className={cx('btn')}>
                    <Button primary popular rightIcon={<BiExport />}>
                        Export
                    </Button>
                    <FilterButton />
                    <Button primary create rightIcon={<AiOutlinePlus />}>
                        Create Admin User
                    </Button>
                </div>
            </div>
            <div className={cx('table')}>
                <Table headerTable={tableId} postUserAdmin={dataClient} loadingUserAdmin={loading} />
            </div>
            <Pagination
                totalPages={metaDataClient.totalPages}
                totalPosts={metaDataClient.totalItems}
                paginate={paginate}
            />
        </div>
    );
}

export default AdminUser;
