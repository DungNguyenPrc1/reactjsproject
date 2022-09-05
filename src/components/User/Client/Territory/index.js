import styles from './Territory.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineArrowRight, AiOutlinePlus } from 'react-icons/ai';
import { BiExport } from 'react-icons/bi';
import Button from '~/components/Button';
import FilterButton from '~/components/Table/FilterButton';
import Table from '~/components/Table';
import { useEffect, useState } from 'react';
import exportApi from '~/utils/exportApi';

const cx = classNames.bind(styles);

function Territory() {
    const tableId = [
        { id: 1, title: 'ID' },
        { id: 2, title: 'First Name' },
        { id: 2, title: 'Last Name' },
        { id: 3, title: 'Email' },
        { id: 3, title: 'Role' },
        { id: 4, title: 'Phone Number' },

        { id: 5, title: '' },
    ];
    const [dataTerritory, setDataTerritory] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const axiosData = async () => {
            try {
                setLoading(true);
                const params = {
                    group: 'territory',
                    page: `1`,
                    pageSize: 10,
                };
                const response = await exportApi.getTerritory(params);
                setDataTerritory(response.data.data);
                setLoading(false);
            } catch (error) {
                console.log('error ne', error);
            }
        };
        axiosData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-title')}>
                    <span>USERS</span>
                    <span>
                        <AiOutlineArrowRight />
                    </span>
                    <span>TERRITORIES</span>
                </div>
                <div className={cx('btn')}>
                    <Button primary popular rightIcon={<BiExport />}>
                        Export
                    </Button>
                    <FilterButton />
                    <Button primary create rightIcon={<AiOutlinePlus />}>
                        Create Territory User
                    </Button>
                </div>
            </div>
            <div className={cx('table')}>
                <Table headerTable={tableId} postUserTerritory={dataTerritory} loadingUserTerritory={loading} />
            </div>
        </div>
    );
}

export default Territory;
