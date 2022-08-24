import styles from './EditUserClients.module.scss';
import classNames from 'classnames/bind';
import { AiOutlineArrowRight, AiOutlineCheckCircle } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
function EditUserClients({ fullData }) {
    const navigate = useNavigate();
    // const [data, setData] = useState(fullData);
    let { id } = useParams();
    const [client, setClient] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    // const [onUpdate, setOnUpdate] = useState({ company: '', email: '', phone: '' });
    // console.log('item to update', item);
    console.log('fullDataEdit user', fullData);
    const handleUpdate = async (e) => {
        e.preventDefault();

        let newItems = {
            clientName: client,
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            role: role,
        };

        let update = await axios.patch(`/admin/clients/${id}`, newItems, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('user')}`,
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        // console.log('item', newItems);

        navigate('/admin/user/client');
    };

    useEffect(() => {
        const dataAxios = async () => {
            let response = await axios.get(`https://flexioapi.afi.dev/api/admin/users/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('user')}` },
                withCredentials: true,
            });

            console.log('response edituserclient', response);
            setClient(response.data.client?.clientName);
            setEmail(response?.data?.email);
            setFirstName(response?.data?.firstName);
            setLastName(response?.data?.lastName);
            setPhone(response?.data?.phone);
            setRole(response?.data?.role);
        };

        // const updateAxios = async () => {
        //     let update = aw;
        // };
        dataAxios();
    }, [id]);

    return (
        <div>
            <div className="flex align-center h-10 ">
                <span className="font-bold text-#ccc">USER</span>
                <span className="px-3">
                    <AiOutlineArrowRight />
                </span>
                <span className="font-bold upercase">CLIENTS</span>
                <span className="px-3">
                    <AiOutlineArrowRight />
                </span>
                <span className="uppercase text-primary font-bold">Edit</span>
            </div>
            <div className="flex justify-center">
                <form className={cx('wrapper-form')} onSubmit={handleUpdate}>
                    <h2>Edit Client</h2>
                    <div className={cx('fill-infor')}>
                        <div className={cx('fill-infor-name')}>
                            <label>Client</label>
                            <input
                                style={{
                                    cursor: 'not-allowed',
                                    background: '#e0e0e0',
                                    color: 'rgba(0,0,0,.25)',
                                }}
                                placeholder="Client"
                                disabled="true"
                                value={client}
                                onChange={(e) => setClient(e.target.value)}
                            />
                        </div>
                        <div className={cx('fill-infor-email')}>
                            <label>Email Address</label>
                            <input
                                style={{
                                    cursor: 'not-allowed',
                                    background: '#e0e0e0',
                                    color: 'rgba(0,0,0,.25)',
                                }}
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={cx('fill-infor-phone')}>
                            <label>First Name</label>
                            <input
                                placeholder="Last Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className={cx('fill-infor-phone')}>
                            <label>Last Name</label>
                            <input
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className={cx('fill-infor-phone')}>
                            <label>Phone Number</label>
                            <input
                                placeholder="Phone Number"
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className={cx('fill-infor-phone')}>
                            <label>Role</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="view">View Only</option>

                                <option value="admin">Super Admin</option>
                                <option value="manager">Manager</option>
                            </select>
                            {/* <input
                                placeholder="Role"
                                value={role.replace('admin', 'Super Admin')}
                                onChange={(e) => setRole(e.target.value)}
                            /> */}
                        </div>
                        <div className={cx('fill-infor-phone')}>
                            <label>Password</label>
                            <input
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* <div className="line-break"></div> */}
                    <footer className={cx('footer')}>
                        <button>Cancel</button>
                        <button className="flex items-center">
                            <span>Update</span>
                            <span className="pl-2">
                                <AiOutlineCheckCircle />
                            </span>
                        </button>
                    </footer>
                </form>
            </div>
        </div>
    );
}

export default EditUserClients;
