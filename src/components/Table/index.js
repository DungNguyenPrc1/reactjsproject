import styles from './Table.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCircle, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FaPen } from 'react-icons/fa';
import { AiOutlineRetweet, AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import ModalSpinner from '../ModalSpinner';
import { Empty, Popconfirm } from 'antd';
import 'antd/dist/antd.min.css';
import Button from '../Button';

const cx = classNames.bind(styles);

function Table({
    headerTable,
    postsTable,
    loading,
    loadingHistory,
    loadingClients,
    loadingUserClient,
    loadingUserTerritory,
    loadingUserDriver,
    loadingUserAdmin,
    postsHistory,
    className,
    postsClients,
    postUserEdit,
    postUserTerritory,
    postUserClient,
    postUserAdmin,
    deleteItem,
    getItemId,
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
                        postsTable?.map((list, i) => {
                            return (
                                <tr key={i} className={cx('list-item')}>
                                    <td>{list.id?.toUpperCase().slice(0, 8)}</td>
                                    <td>{list.driver?.clientId}</td>
                                    <td>{list.driver?.fullNameBank === null ? 'N/A' : list.driver?.fullNameBank}</td>

                                    <td>{'N/A'}</td>
                                    <td>{'N/A'}</td>
                                    <td>{list.createdAt?.toUpperCase().slice(0, 10)}</td>
                                    <td>{list.pickupTime}</td>
                                    <td>{list.distance}</td>
                                    <td>{list.workingMins}</td>
                                    <td>{list.vehicle?.name}</td>
                                    <td>
                                        {list.status === 'accepted' ? (
                                            <div
                                                style={{
                                                    backgroundColor: 'rgba(0, 200, 83, 0.2)',
                                                    height: '32px',
                                                    lineHeight: '24px',
                                                    fontWeight: '600',
                                                    fontSize: '12px',

                                                    padding: '4px 8px',
                                                }}
                                            >
                                                {<FontAwesomeIcon icon={faCircle} />} {list?.status.replace('a', 'A')}
                                            </div>
                                        ) : list.status === 'cancel' ? (
                                            <div
                                                style={{
                                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                    color: 'rgb(0, 0, 0)',
                                                    height: '32px',
                                                    lineHeight: '24px',
                                                    fontWeight: '600',
                                                    fontSize: '12px',

                                                    padding: '4px 8px',
                                                }}
                                            >
                                                {<FontAwesomeIcon icon={faCircle} />} {list?.status.replace('c', 'C')}
                                            </div>
                                        ) : list.status === 'in-progress' ? (
                                            <div
                                                style={{
                                                    backgroundColor: 'rgba(255, 132, 0, 0.2)',
                                                    color: 'rgb(255, 132, 0)',
                                                    height: '32px',
                                                    lineHeight: '24px',
                                                    fontWeight: '600',
                                                    fontSize: '12px',

                                                    padding: '4px 8px',
                                                }}
                                            >
                                                {<FontAwesomeIcon icon={faCircle} />}{' '}
                                                {list?.status.replace('in-progress', 'In Progress')}
                                            </div>
                                        ) : list.status === 'completed' ? (
                                            <div
                                                style={{
                                                    backgroundColor: 'rgba(0, 200, 83, 0.2)',
                                                    color: 'rgb(0, 200, 83)',
                                                    height: '32px',
                                                    lineHeight: '24px',
                                                    fontWeight: '600',
                                                    fontSize: '12px',

                                                    padding: '4px 8px',
                                                }}
                                            >
                                                {<FontAwesomeIcon icon={faCircle} />} {list?.status.replace('c', 'C')}
                                            </div>
                                        ) : (
                                            <div
                                                style={{
                                                    backgroundColor: 'rgba(136, 136, 136, 0.2)',
                                                    color: 'rgb(136, 136, 136)',
                                                    height: '32px',
                                                    lineHeight: '24px',
                                                    fontWeight: '600',
                                                    fontSize: '12px',

                                                    padding: '4px 8px',
                                                }}
                                            >
                                                {<FontAwesomeIcon icon={faCircle} />} {list?.status.replace('p', 'P')}
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {list.status === 'completed' ? (
                                            <div style={{ padding: '10px', backgroundColor: 'white' }}>
                                                <FontAwesomeIcon
                                                    icon={faArrowUpRightFromSquare}
                                                    onClick={() => getItemId(list?.id)}
                                                />
                                                <FontAwesomeIcon icon={faRoute} />
                                            </div>
                                        ) : list.status === 'pending' ? (
                                            <div style={{ padding: '10px', backgroundColor: 'white' }}>
                                                <FontAwesomeIcon
                                                    icon={faArrowUpRightFromSquare}
                                                    onClick={() => getItemId(list?.id)}
                                                />
                                                <FontAwesomeIcon icon={faRoute} />
                                                <BsFillTrashFill />
                                                <AiOutlineArrowRight />
                                            </div>
                                        ) : (
                                            <div style={{ padding: '10px', backgroundColor: 'white' }}>
                                                <FontAwesomeIcon
                                                    icon={faArrowUpRightFromSquare}
                                                    onClick={() => getItemId(list?.id)}
                                                />
                                                <FontAwesomeIcon icon={faRoute} />
                                                <BsFillTrashFill />
                                                <AiOutlineRetweet />
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
                <tbody>
                    {loadingHistory ? (
                        <ModalSpinner />
                    ) : postsHistory?.length === 0 ? (
                        <tr>
                            <td className={cx('custom-empty')} colSpan="13">
                                <Empty />
                            </td>
                        </tr>
                    ) : (
                        postsHistory?.map((list, i) => {
                            return (
                                <tr key={i} className={cx('list-item')}>
                                    <td>{list?.id?.toUpperCase().slice(0, 8)}</td>
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
                                        <button className={cx('btn-status')}>{list?.status?.toUpperCase()}</button>
                                    </td>
                                    <td>
                                        <button>{<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}</button>
                                        <button style={{ padding: '10px', backgroundColor: 'white' }}>
                                            {<FontAwesomeIcon icon={faRoute} />}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
                <tbody>
                    {loadingClients ? (
                        <ModalSpinner />
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
                    {loadingUserClient ? (
                        <ModalSpinner />
                    ) : (
                        postUserEdit &&
                        postUserEdit.length > 0 &&
                        postUserEdit?.map((list, i) => {
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
                                        <button onClick={() => navigate(`/admin/users/clients/${list.id}`)}>
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
                    {loadingUserTerritory ? (
                        <ModalSpinner />
                    ) : postUserTerritory?.length === 0 ? (
                        <tr>
                            <td className={cx('custom-empty')} colSpan="7">
                                <Empty />
                            </td>
                        </tr>
                    ) : (
                        postUserTerritory?.map((list, i) => {
                            return (
                                <tr key={i} className={cx('list-item')}>
                                    <td>{list?.id?.toUpperCase().slice(0, 8)}</td>
                                    <td>{list?.firstName}</td>
                                    <td>{list?.lastName}</td>
                                    <td>{list?.email}</td>
                                    <td>{list?.phone}</td>
                                    <td>{list?.status}</td>

                                    <td>
                                        <button>{<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}</button>
                                        <button style={{ padding: '10px', backgroundColor: 'white' }}>
                                            {<FontAwesomeIcon icon={faRoute} />}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
                <tbody>
                    {loadingUserDriver ? (
                        <ModalSpinner />
                    ) : postUserClient?.length === 0 ? (
                        <tr>
                            <td className={cx('custom-empty')} colSpan="7">
                                <Empty />
                            </td>
                        </tr>
                    ) : (
                        postUserClient?.map((list, i) => {
                            return (
                                <tr key={i} className={cx('list-item')}>
                                    <td>{list?.id?.toUpperCase().slice(0, 8)}</td>
                                    <td>{list?.firstName}</td>
                                    <td>{list?.lastName}</td>
                                    <td>{list?.email}</td>
                                    <td>{list?.phone}</td>
                                    <td>{list?.country}</td>
                                    <td>
                                        <Button border>{list?.status?.replace('pending', 'ACTIVE')}</Button>
                                    </td>
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
                    {loadingUserAdmin ? (
                        <ModalSpinner />
                    ) : postUserAdmin?.length === 0 ? (
                        <tr>
                            <td className={cx('custom-empty')} colSpan="7">
                                <Empty />
                            </td>
                        </tr>
                    ) : (
                        postUserAdmin?.map((list, i) => {
                            return (
                                <tr key={i} className={cx('list-item')}>
                                    <td>{list?.id?.toUpperCase().slice(0, 8)}</td>
                                    <td>{list?.firstName}</td>
                                    <td>{list?.lastName}</td>
                                    <td>{list?.email}</td>
                                    <td>
                                        <span
                                            style={{
                                                backgroundColor: 'rgba(67, 193, 194, 0.2)',
                                                color: 'rgb(67, 193, 194)',
                                                width: '112px',
                                                fontWeight: '600',
                                                fontSize: '12px',
                                                lineHeight: '32px',
                                                padding: '4px 8px',
                                                // minHeight: '32px',
                                            }}
                                        >
                                            {list?.role?.replace('admin', 'Super Admin')}
                                        </span>
                                    </td>
                                    <td>{list?.phone}</td>

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
            </table>
        </div>
    );
}

export default Table;
