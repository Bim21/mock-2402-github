import React from 'react';
import { Layout, Menu } from 'antd';
// import 'antd/dist/antd.css';
import { IoSpeedometerOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineWork } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BiExit } from "react-icons/bi";





const { Header, Sider, Content } = Layout;


const ApplicantContent = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={320} theme="light">

                <div className='w-auto h-56 bg-blue-500 rounded-[9px] flex flex-col '>

                    <div className='h-20 flex flex-row items-center text-white'>

                        <VscAccount className='w-16 h-16 mt-2 ml-2'/>

                        <div className='pl-5'>
                            <div className='text-[16px] font-bold'>Nguyen Chien</div>
                            <div className='text-[16px] font-medium'>Nhan Vien</div>
                        </div>

                        <BiExit className='text-[30px] ml-16 mb-8'/>
                        
                    </div>



                    <div className=' mt-7 w-70 h-24  ml-3 mr-3 bg-slate-50 rounded-[5px]'>

                        <div className='text-black text-[14px] font-medium mt-2 ml-5' >Cho phep tim kiem ho so</div>

                        <div className='text-slate-600 text-[13px] mt-2 ml-5'>Ho so chua du dieu kien cho phep tim kiem</div>

                        <button className='text-blue-800 mt-2 text-[14px]  ml-5' type='button'>Thiet lap ho so</button>
                        
                    </div>





                </div>
                <Menu theme="" mode="inline" className='mt-2 bg-slate-100 h-auto'>

                    <div className='flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2'>
                        <IoSpeedometerOutline className='w-auto h-auto' />
                        <Menu.Item className='' >
                            Tổng Quan</Menu.Item>
                    </div>

                    <div className='flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2'>
                        <ImProfile className='w-auto h-auto' />
                        <Menu.Item className='' >Hồ Sơ Của Tôi</Menu.Item>
                    </div>

                    <div className='flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2'>
                        <HiOutlineBuildingOffice2 className='w-auto h-auto' />
                        <Menu.Item className=''>Công Ty Của Tôi</Menu.Item>
                    </div>

                    <div className='flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2'>
                        <MdOutlineWork className='w-auto h-auto' />
                        <Menu.Item className=''>Việc Làm Của Tôi</Menu.Item>
                    </div>

                    <div className='flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2'>
                        <IoMdNotificationsOutline className='w-auto h-auto' />
                        <Menu.Item className=''>Thông Báo Việc làm</Menu.Item>
                    </div>

                    <div className='flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2'>
                        <IoMdSettings className='w-auto h-auto' />
                        <Menu.Item className=''>Quản Lý Tài Khoản</Menu.Item>
                    </div>


                </Menu>
            </Sider>
            <Layout>
                {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        Content goes here
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default ApplicantContent
