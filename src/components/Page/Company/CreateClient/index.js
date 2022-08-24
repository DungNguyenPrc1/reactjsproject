import styles from './CreateClient.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from '~/utils/request';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function CreateClient() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // const [onUpdate, setOnUpdate] = useState({ company: '', email: '', phone: '' });
    // console.log('item to update', item);

    const handleNewCreate = async (e) => {
        e.preventDefault();

        let newItems = { clientName: company, supportEmail: email, supportPhone: phone };

        const update = await axios.post(`/admin/clients`, newItems, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('user')}`,
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        console.log('item', newItems);

        navigate('/admin/client');
    };

    useEffect(() => {
        // const dataAxios = async () => {
        //     let response = await axios.get(`/admin/clients/${id}`, {
        //         headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
        //         withCredentials: true,
        //     });
        //     setCompany(response?.data?.clientName);
        //     setEmail(response?.data?.supportEmail);
        //     setPhone(response?.data?.supportPhone);
        // };
        // const updateAxios = async () => {
        //     let update = aw;
        // };
        // dataAxios();
    }, []);

    return (
        <div>
            <div className="flex align-center h-10 ">
                <span className="font-bold">CLIENTS</span>
                <span className="px-3">
                    <AiOutlineArrowRight />
                </span>
                <span className="uppercase text-primary font-bold">Create Client</span>
            </div>
            <div className="flex justify-center">
                <form className={cx('wrapper-form')} onSubmit={handleNewCreate}>
                    <h2>Create Client</h2>
                    <div className={cx('fill-infor')}>
                        <div className={cx('fill-infor-name')}>
                            <label>Company Name</label>
                            <input
                                placeholder="Company Name"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                        <div className={cx('fill-infor-email')}>
                            <label>Support Email</label>
                            <input
                                placeholder="Support Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={cx('fill-infor-phone')}>
                            <label>Support Phone</label>
                            <input
                                placeholder="Support Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="line-break"></div>
                    <footer className={cx('footer')}>
                        <button>Cancel</button>
                        <button>Create </button>
                    </footer>
                </form>
            </div>
        </div>
    );
}

export default CreateClient;
