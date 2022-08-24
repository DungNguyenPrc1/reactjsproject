import styles from './Table.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCircle, faRoute, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ModalSpinner from '../ModalSpinner';
import { Popconfirm } from 'antd';
import 'antd/dist/antd.min.css';

const cx = classNames.bind(styles);

function Table({
    headerTable,
    postsTable,
    loading,
    postsHistory,
    className,
    postsClients,
    postUserEdit,
    deleteItem,
    ...passPros
}) {
    const props = { ...passPros };
    const classes = cx('wrapper', { [className]: className });
    const navigate = useNavigate();

    // console.log('table className', classes);
    return (
        <div className={classes} {...props}>
            <table className={cx('table-wrapper')}>
                <thead className={cx('table-head')}>
                    <tr className={cx('table')}>
                        {headerTable.map((title, i) => {
                            return (
                                <th className={cx('table-child')} key={i}>
                                    {title.title}
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <ModalSpinner />
                    ) : (
                        postsTable &&
                        postsTable.length > 0 &&
                        postsTable.map((list, i) => {
                            return (
                                <tr key={i} className={cx('list-item')}>
                                    <td>{list.id?.toUpperCase().slice(0, 8)}</td>
                                    <td>{list.driver?.clientId === null ? 'N/A' : list.driver?.clientId}</td>
                                    <td>{list.driver?.fullNameBank === null ? 'N/A' : list.driver?.fullNameBank}</td>

                                    <td>{'N/A'}</td>
                                    <td>{'N/A'}</td>
                                    <td>{list.createdAt?.toUpperCase().slice(0, 10)}</td>
                                    <td>{list.pickupTime}</td>
                                    <td>{list.distance}</td>
                                    <td>{list.workingMins}</td>
                                    <td>{list.vehicle?.name}</td>
                                    <td>
                                        <button>{<FontAwesomeIcon icon={faCircle} />}</button>
                                        <button className={cx('btn-status')}>{list?.status}</button>
                                    </td>
                                    <td>
                                        <button>{<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}</button>
                                        <button normal style={{ padding: '10px', backgroundColor: 'white' }}>
                                            {<FontAwesomeIcon icon={faRoute} />}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
                <tbody>
                    {postsHistory && loading ? (
                        <ModalSpinner />
                    ) : (
                        postsHistory &&
                        postsHistory.length > 0 &&
                        postsHistory.map((list, i) => {
                            return (
                                <tr key={i} className={cx('list-item')}>
                                    <td>{list.id?.toUpperCase().slice(0, 8)}</td>
                                    <td>{'N/A'}</td>
                                    <td>{'N/A'}</td>
                                    <td>{list?.noOfPickup}</td>
                                    <td>{list?.noOfDropOff}</td>
                                    <td>{list?.noOfPackages}</td>
                                    <td>{list?.pickupDate}</td>
                                    <td>{list?.service}</td>
                                    <td>{list?.minVehicleType}</td>
                                    <td>{list?.createdBy}</td>
                                    <td>{list?.createdAt.slice(0, 10)}</td>
                                    <td>
                                        {<button className={cx('btn-status')}>{list.status?.toUpperCase()}</button>}
                                    </td>
                                    <td>
                                        <button>{<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}</button>
                                        <button normal style={{ padding: '10px', backgroundColor: 'white' }}>
                                            {<FontAwesomeIcon icon={faRoute} />}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
                <tbody>
                    {postsClients && loading ? (
                        <FontAwesomeIcon icon={faSpinner} />
                    ) : (
                        postsClients &&
                        postsClients.length > 0 &&
                        postsClients.map((list, i) => {
                            // setId(list?.id);
                            return (
                                <tr key={i} className={cx('list-item')}>
                                    <td>{list.id?.toUpperCase().slice(0, 8)}</td>
                                    <td>{list?.clientName}</td>
                                    <td>{list?.supportEmail}</td>
                                    <td>{list?.supportPhone}</td>
                                    <td>{list?.supportPhone}</td>
                                    <td>
                                        <button onClick={() => navigate(`/admin/client/${list.id}`)}>
                                            {<FaPen />}
                                        </button>

                                        <Popconfirm
                                            style={{ width: 'inherit' }}
                                            placement="top"
                                            title={'Are you sure to this one '}
                                            onConfirm={() => deleteItem(list.id)}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <button
                                                // onClick={handleClickDelete}
                                                // normal
                                                style={{ padding: '10px', backgroundColor: 'white' }}
                                            >
                                                {<MdDelete />}
                                            </button>
                                        </Popconfirm>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
                <tbody>
                    {postUserEdit && loading ? (
                        <FontAwesomeIcon icon={faSpinner} />
                    ) : (
                        postUserEdit &&
                        postUserEdit.length > 0 &&
                        postUserEdit.map((list, i) => {
                            return (
                                <tr key={i} className={cx('list-item')}>
                                    <td>{list.id?.toUpperCase().slice(0, 8)}</td>
                                    <td>{list?.firstName}</td>
                                    <td>{list?.lastName}</td>
                                    <td>{list?.email}</td>
                                    <td>
                                        {list?.role === 'admin' ? (
                                            <span style={{ width: '112px' }}>
                                                {list?.role.replace('admin', 'Super Admin')}
                                            </span>
                                        ) : (
                                            <span
                                                style={{
                                                    width: '112px',
                                                    backgroundColor: '#ccc',
                                                    color: '#000',
                                                    fontWeight: '600',
                                                }}
                                            >
                                                {list?.role.replace('viewer', 'View Only')}
                                            </span>
                                        )}
                                    </td>
                                    <td>{list?.phone}</td>
                                    <td>{list?.client?.clientName}</td>
                                    <td>
                                        <button onClick={() => navigate(`/admin/user/client/${list.id}`)}>
                                            {<FaPen />}
                                        </button>

                                        <Popconfirm
                                            style={{ width: 'inherit' }}
                                            placement="top"
                                            title={'Are you sure to this one '}
                                            onConfirm={() => deleteItem(list.id)}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <button
                                                // onClick={handleClickDelete}
                                                // normal
                                                style={{ padding: '10px', backgroundColor: 'white' }}
                                            >
                                                {<MdDelete />}
                                            </button>
                                        </Popconfirm>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
