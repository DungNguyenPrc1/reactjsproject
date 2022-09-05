import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu({ items = [] }) {
    // const [history, setHistory] = useState([{ data: items }]);
    // const currentItem = history[history.length - 1];

    const [active, setActive] = useState(false);

    const [activeIndex, setActiveIndex] = useState();

    return items.map((item, index) => {
        return (
            <div
                className={cx('title')}
                key={index}
                onClick={() => (item.children ? setActive(!active) : setActive(false))}
            >
                <div
                    className={item.id === activeIndex ? cx('focus') : ''}
                    onClick={() => item.path && setActiveIndex(index)}
                >
                    {
                        item.path ? (
                            <Link to={`${item.path}`}>
                                <MenuItem data={item} />
                            </Link>
                        ) : item.children ? (
                            <MenuItem data={item} />
                        ) : (
                            <div style={{ pointerEvents: 'none', cursor: 'not-allowed' }}>
                                <MenuItem data={item} />
                            </div>
                        )
                        // <MenuItem data={item} />
                    }
                </div>

                {item.children?.map((item, index) => {
                    return (
                        <div className={cx('title-childers', { active })} key={index}>
                            <Link to={`${item.path}`}>{item.title}</Link>
                        </div>
                    );
                })}
            </div>
        );
    });
}

export default Menu;
