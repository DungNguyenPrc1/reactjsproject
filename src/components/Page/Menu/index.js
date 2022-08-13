import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu({ items = [] }) {
    // const [history, setHistory] = useState([{ data: items }]);
    // const currentItem = history[history.length - 1];

    const [active, setActive] = useState(-1);
    const [changeColor, setChangeColor] = useState(false);
    return items.map((item, index) => {
        const handleClick = () => {
            setChangeColor(!changeColor);
            index === active ? setActive(-1) : setActive(index);
        };

        return (
            <div className={cx('title')} key={index} onClick={handleClick}>
                <div style={{ background: changeColor ? '#ccc' : '' }}>
                    {item.path ? (
                        <Link to={`${item.path}`}>
                            <MenuItem data={item} />
                        </Link>
                    ) : (
                        <MenuItem data={item} />
                    )}
                </div>

                {index === active &&
                    item.children?.map((item, index) => {
                        const abc = item.id;
                        return (
                            <div className={cx('title-childers')} key={index} onClick={() => console.log(abc)}>
                                {item.title}
                            </div>
                        );
                    })}
            </div>
        );
    });
}

export default Menu;
