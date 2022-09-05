import styles from './ModalSpinner.module.scss';
import classNames from 'classnames/bind';

import { Fragment } from 'react';
import { Spin } from 'antd';

const cx = classNames.bind(styles);
function ModalSpinner() {
    return (
        <Fragment>
            <tr className={cx('wrapper')}>
                <td className={cx('modal-styles')}>
                    <Spin />
                </td>
            </tr>
        </Fragment>
    );
}

export default ModalSpinner;
