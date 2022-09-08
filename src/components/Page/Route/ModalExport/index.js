import classNames from 'classnames/bind';
import styles from './ModalExport.module.scss';
import ReactDom from 'react-dom';
import { RiDownloadLine } from 'react-icons/ri';
import { DatePicker } from 'antd';
import 'antd/dist/antd.min.css';
import { useState } from 'react';
import { CSVLink, CSVDownload } from 'react-csv';

import exportApi from '~/utils/exportApi';
import moment from 'moment';

const cx = classNames.bind(styles);

function ModalExport({ open, onClose }) {
    const [route, setRoute] = useState({});
    const [data, setData] = useState([]);
    const [customDay, setCustomDay] = useState(false);

    const handleDownload = async () => {
        let response = await exportApi.getAll(route);

        setData(JSON.parse(response.data));
    };
    const onChangeExport = (type, value) => {
        setRoute({ ...route, [type]: value });
    };

    if (!open) return null;
    return ReactDom.createPortal(
        <>
            <div className={cx('wrapper')} />
            <div className={cx('wrapper-table')}>
                <div className={cx('table-header')}>
                    <div>Export Routes Data</div>
                </div>
                <div className={cx('table-body')}>
                    <div className={cx('table-body-select')}>
                        <div className={cx('table-body-radio')}>
                            <div className={cx('element-radio')}>
                                <input type="radio" id="allroutes" name="route" onClick={() => setCustomDay(false)} />
                                <label htmlFor="allroutes">All Routes</label>
                            </div>
                            <div className={cx('element-radio')}>
                                <input
                                    type="radio"
                                    id="todayroutes"
                                    name="route"
                                    onClick={() => setCustomDay(false)}
                                    value={moment().format('YYYY-MM-DD')}
                                    onChange={(e) => onChangeExport('startDate', e.target.value)}
                                />
                                <label htmlFor="todayroutes">Today's Routes</label>
                            </div>
                            <div className={cx('element-radio')}>
                                <input
                                    type="radio"
                                    id="customdaterange"
                                    name="route"
                                    value="customday"
                                    onClick={() => setCustomDay(true)}
                                />
                                <label htmlFor="customdaterange">Custom Date Range</label>
                            </div>
                        </div>
                        <div className={cx('custom-day', { customDay })}>
                            <DatePicker
                                className={cx('date-picker')}
                                onChange={(date, dateString) => {
                                    onChangeExport('startDate', dateString);
                                }}
                            />
                            <DatePicker
                                className={cx('date-picker')}
                                onChange={(date, dateString) => {
                                    onChangeExport('endDate', dateString);
                                }}
                            />
                        </div>
                    </div>
                    <div className={cx('table-footer')}>
                        <button onClick={onClose}>Cancel</button>
                        <CSVLink data={data} target="_blank" filename={'route'}>
                            <button onClick={handleDownload}>
                                <span>Download</span>
                                <span>
                                    <RiDownloadLine />
                                </span>
                            </button>
                        </CSVLink>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal'),
    );
}

export default ModalExport;
