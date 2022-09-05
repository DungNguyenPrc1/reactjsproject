import styles from './Driver.module.scss';
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

function Driver() {
    const tableId = [
        { id: 1, title: 'ID' },
        { id: 2, title: 'First Name' },
        { id: 2, title: 'Last Name' },
        { id: 3, title: 'Email' },
        { id: 3, title: 'Phone Number' },
        { id: 4, title: 'Country' },
        { id: 5, title: 'Status' },

        { id: 6, title: '' },
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
                    page: `${currentPage}`,
                    pageSize: `${postPerPage}`,
                };
                const response = await exportApi.getUsersClients(params);
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
                    <span>DRIVERS</span>
                </div>
                <div className={cx('btn')}>
                    <Button primary popular rightIcon={<BiExport />}>
                        Export
                    </Button>
                    <FilterButton />
                    <Button primary create rightIcon={<AiOutlinePlus />}>
                        Add New Driver
                    </Button>
                </div>
            </div>
            <div className={cx('table')}>
                <Table headerTable={tableId} postUserClient={dataClient} loadingUserClient={loading} />
            </div>
            <Pagination
                totalPages={metaDataClient.totalPages}
                totalPosts={metaDataClient.totalItems}
                paginate={paginate}
            />
        </div>
    );
}

export default Driver;
