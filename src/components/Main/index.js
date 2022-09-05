import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import logo from '~/asset/images/logosvg.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from '~/utils/request';
import { useAuth } from '~/components/Context/AuthProvider';
import ModalSpinner from '../ModalSpinner';

const cx = classNames.bind(styles);
// const EMAIL_REGEX = /^[a-z][^\W_]{7,14}$/;
// const PWD_REGEX = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/;

// console.log(USER_REGEX.test);

function Main() {
    const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state?.from?.pathname || '/';
    const auth = useAuth();
    const [user, setUser] = useState();
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    // const [isLogIn, setIsLogIn] = useState(false);

    const logAdmin = {
        email: email,
        password: password,
    };
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem('user');
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);
    //         setUser(foundUser);
    //     }
    // }, []);

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await axios.post('/admin/auth/login', JSON.stringify(logAdmin), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles
            // console.log(response.data);
            setSuccess(true);
            setEmail('');
            setPassword('');
            setUser(response.data);
            // setIsLogIn({ email, password, roles, accessToken });

            auth.login((prev) => true);
            // navigate(from, { replace: true });
            setLoading(false);
            navigate('/admin');
            localStorage.setItem('user', accessToken);
        } catch (err) {
            if (!err?.response) {
                setErrorMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrorMsg('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrorMsg('Unauthorized');
            } else {
                setErrorMsg('Login Fail');
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <img src={logo} alt="abc" className={cx('logo')} />
            <div className={cx('content')}>
                {success ? (
                    <ModalSpinner /> & window.location.assign('http://localhost:3000/admin')
                ) : (
                    <>
                        <section>
                            <p className={!!errorMsg ? cx('errorMsg') : 'offscreen'}> {errorMsg}</p>
                        </section>

                        <form onSubmit={loginUser}>
                            <h4 className={cx('title')}>Welcome Back!</h4>
                            <p className={cx('title-1')}> Login to your Flexio admin account</p>

                            <div className={cx('fill-sign-in')}>
                                <label className={cx('label-form')}>Email Address</label>
                                <input
                                    type="text"
                                    value={email}
                                    placeholder="jason@flexiopr.com"
                                    className={cx('input-sign-in')}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={cx('fill-sign-in')}>
                                <label className={cx('label-form')}>Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="text"
                                    name="password"
                                    placeholder="************"
                                    className={cx('input-sign-in')}
                                />
                            </div>
                            <div className={cx('footer-sign-in')}>
                                <p>Forgot Password?</p>

                                <Button className={cx('btn-modify')}>Log In</Button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default Main;
