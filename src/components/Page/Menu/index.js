import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu({ items }) {
    // const [history, setHistory] = useState([{ data: items }]);

    // const currentItem = history[history.length - 1];

    const [active, setActive] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndexChild, setActiveIndexChild] = useState(-1);

    const handleChildren = (item) => {
        console.log(item);
    };

    return items.map((item, index) => {
        return (
            <div className={cx('title')} key={index} onClick={() => handleChildren(item)}>
                <div
                    className={item.id === activeIndex ? cx('focus') : active ? cx('active') : ''}
                    onClick={() => (item.path ? setActiveIndex(index) & setActiveIndexChild(-1) : setActive(true))}
                >
                    {
                        item.path ? (
                            <Link to={`${item.path}`}>
                                <MenuItem data={item} />
                            </Link>
                        ) : item.children ? (
                            <MenuItem data={item} />
                        ) : (
                            <div style={{ cursor: 'not-allowed' }}>
                                <span style={{ pointerEvents: 'none' }}>
                                    <MenuItem data={item} />
                                </span>
                            </div>
                        )
                        // <MenuItem data={item} />
                    }
                </div>

                <div className={cx('active')}>
                    {item.children?.map((item, index) => {
                        return (
                            <div
                                className={cx('title-childers')}
                                key={index}
                                onClick={() => setActiveIndexChild(index) & setActiveIndex(-2)}
                            >
                                <div className={item.id === activeIndexChild ? cx('focus') : ''}>
                                    <div>
                                        <Link to={`${item.path}`}>{item.title}</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    });
}

export default Menu;
