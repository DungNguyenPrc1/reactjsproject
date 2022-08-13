import styles from './FilterTable.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCalendar, faCheck, faLayerGroup, faSearch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function FilterTable({ active, handleFilter, handleCollapse, dataFilter = {}, onChangeValue }) {
    const [date, setDate] = useState(new Date());

    const [activeCalendar, setActiveCalendar] = useState(true);
    // const [id, setId] = useState('');

    return (
        <form onSubmit={handleFilter}>
            <div className={cx('wrapper', { active })}>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>ID</span>
                    <div className={cx('wrapper-input')}>
                        <input
                            placeholder="ID"
                            value={dataFilter?.id}
                            onChange={(e) => onChangeValue('id', e.target.value)}
                        />
                        <FontAwesomeIcon icon={faSearch} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Pickup Date</span>
                    <div className={cx('wrapper-input')}>
                        <input
                            placeholder="Pickup Date"
                            value={date}
                            onClick={(e) => {
                                setActiveCalendar(!activeCalendar);
                                console.log(e.target.value);
                                onChangeValue('date', e.target.value);
                            }}
                        />
                        <FontAwesomeIcon icon={faCalendar} className={cx('icon-input')} />
                        <Calendar
                            CalendarType="ISO 8601"
                            className={cx('calendar', { activeCalendar })}
                            onChange={setDate}
                            value={date}
                            onClickDay={() => {
                                setActiveCalendar(!activeCalendar);
                            }}
                        />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Service</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="All" />
                        <FontAwesomeIcon icon={faAngleDown} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Created by</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="All" />
                        <FontAwesomeIcon icon={faAngleDown} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Status</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="Status" />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Location Name</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="Location Name" />
                        <FontAwesomeIcon icon={faSearch} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Physical Address</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="Physical Address" />
                        <FontAwesomeIcon icon={faSearch} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Contact Name</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="Contact Name" />
                        <FontAwesomeIcon icon={faSearch} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Internal Route ID</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="Internal Route ID" />
                        <FontAwesomeIcon icon={faSearch} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Internal Order ID</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="Internal Order ID" />
                        <FontAwesomeIcon icon={faSearch} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Internal Customer ID</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="Internal Customer ID" />
                        <FontAwesomeIcon icon={faSearch} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Salesperson</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="Salesperson" />
                        <FontAwesomeIcon icon={faSearch} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Client</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="All" />
                        <FontAwesomeIcon icon={faAngleDown} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('wrapper-mini')}>
                    <span className={cx('title-search')}>Driver</span>
                    <div className={cx('wrapper-input')}>
                        <input placeholder="Driver" />
                        <FontAwesomeIcon icon={faAngleDown} className={cx('icon-input')} />
                    </div>
                </div>
                <div className={cx('footer')}>
                    <button onClick={handleCollapse}>
                        Collapse <FontAwesomeIcon icon={faAngleUp} className={cx('footer-icon')} />
                    </button>
                    <button>
                        Clear <FontAwesomeIcon icon={faLayerGroup} className={cx('footer-icon')} />
                    </button>
                    <button>
                        Apple <FontAwesomeIcon icon={faCheck} className={cx('footer-icon')} />
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FilterTable;
