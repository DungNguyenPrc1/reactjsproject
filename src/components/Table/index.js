import styles from './Table.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCircle, faRoute, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Table({ headerTable, postsTable, loading, postsHistory, className, ...passPros }) {
    const props = { ...passPros };
    const classes = cx('wrapper', { [className]: className });
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
                        <FontAwesomeIcon icon={faSpinner} />
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
                    {loading ? (
                        <FontAwesomeIcon icon={faSpinner} />
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
            </table>
        </div>
    );
}

export default Table;
