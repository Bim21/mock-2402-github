import React from 'react';
import { BsHandbagFill } from "react-icons/bs";
import { HiHomeModern } from "react-icons/hi2";
import { AiFillHeart } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { LiaLanguageSolid } from "react-icons/lia";
import { IoIosNotifications } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import Modal from './Modal';
import { isAuthenticated } from '../services/api';

const Header = (props) => {

    const isLogin = props.isLogin;

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [loginName, setLoginName] =useState('');
    const navigate = useNavigate();

    const goToCompany = () => {
        navigate('/company')
    }

    const goToJobPage = () => {
        navigate('/job')
    }

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    const handleChangeLoginName = (value) => {
        setLoginName(value)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    


const Header = () => {
    return (
        <div className='w-full h-[64px] bg-blue-800 flex items-center'>
            <div className='flex justify-around w-full my-0 mx-[20px]'>
                <a href='/' title='Home Page'>
                    <img src='https://www.vietnamworks.com/assets-page-container/images/vnw_empower_growth_logo_white.png'
                        className='w-[167px] h-[40]'
                    />
                </a>
                <div className='flex items-center w-[916px]'>
                    <div className='w-full px-[20px] py-[0px] flex items-center justify-between'>
                        <div className='p-0'>
                            <ul className='flex list-none p-0 mb-0 bg-blue-800'>
                                <li className='mr-[56px] h-full text-white'>
                                    <a href='/' className='flex items-center gap-x-[8px] gap-y-[4px]'>
                                        <BsHandbagFill className='w-21 h-22' />
                                        <span className='text-sm'>Việc Làm</span>
                                    </a>
                                </li>
                                <li className='mr-[56px] h-full text-white'><a href='/' className='flex items-center gap-x-[8px] gap-y-[4px]'>
                                    <HiHomeModern className='w-21 h-22' />
                                    <span className='text-sm'>Công Ty</span>
                                </a></li>
                                <li className='mr-[56px] h-full text-white'><a href='/' className='flex items-center gap-x-[8px] gap-y-[4px]'>
                                    <AiFillHeart className='w-21 h-22' />
                                    <span className='text-sm'>Việc Của Tôi</span>
                                </a></li>
                                <li className='mr-[56px] h-full text-white'><a href='/' className='flex items-center gap-x-[8px] gap-y-[4px]'>
                                    <AiFillSetting className='w-21 h-22' />
                                    <span className='text-sm'>Nghề Nghiệp</span>
                                </a></li>
                            </ul>
                        </div>
                        <div className='flex items-center mr-[0px]'>
                            <div className='w-[1px] h-[48px] my-0 mx-[32px] bg-blue-200'></div>
                            <a href='/' className='grid gap-y-[4px] text-white text-center '>
                                <span className='text-sm'>NHÀ TUYỂN DỤNG</span>
                                <span className='text-xs'>Tìm kiếm nhân tài</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center items-center p-[7px] rounded-[95px] border-solid border-2 gap-x-[8px] border-blue-500'>
                    <div className='flex justify-center items-center'>
                        <button className=''>
                            <LiaLanguageSolid className='bg-blue-800 text-white rounded-[95px] w-[24px] h-full' />
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button>
                            <IoIosNotifications className='bg-blue-800 text-white rounded-[95px] w-[24px] h-full' />
                        </button>
                    </div>
                    {
                        isLogin === false ? 
                    <div className='flex justify-center items-center'>
                        <button className='flex items-center text-blue-300 hover:text-white' onClick={openModal}>
                            <CiLogin className='bg-blue-800 rounded-[95px] w-[24px] h-full' />
                            <span className='font-bold'>Đăng Nhập</span>
                        </button>
                        <Modal isOpen={isOpenModal} onClose={closeModal} handleChangeLoginName={handleChangeLoginName}/>
                    </div> : 
                    <div className='flex justify-center items-center'>
                        <button className='flex items-center text-blue-100 hover:text-white' onClick={openModal}>
                            <MdOutlineAccountCircle className='bg-blue-800 rounded-[95px] w-[24px] h-full' />
                            <span className='font-bold'>{loginName}</span>
                        </button>
                    <div className='flex justify-center items-center'>
                        <button className='flex items-center '>
                            <CiLogin className='bg-blue-800 text-white rounded-[95px] w-[24px] h-full'/>
                           <span className='text-white '>Đăng Nhập</span>
                        
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;