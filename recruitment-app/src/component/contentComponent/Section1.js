import React from 'react';
import { BsSearch } from "react-icons/bs";

const Section1 = () => {
    return (
        <div className=' pt-[24px] pb-[40px] bg-blue-800'>
            <section className='w-full'>
                <div className='max-w-[1200px] px-[16px] mx-[auto] flex justify-center items-center'>
                    <div className='flex max-w-full flex-col mx-auto'>
                        <div className='w-full mb-[16px] h-[80px] rounded-[68px] p-[16px] bg-blue-900'>
                            <div className='flex rounded-[32px] bg-white'>
                                <div className='max-w-[1200px] w-full flex'>
                                    <div className='inline-flex pl-[16px] justify-center items-center w-full'>
                                        <button className='mr-[10px]'>
                                            <BsSearch />
                                        </button>
                                        <div className='flex w-full'>
                                            <input type='text' className='h-[48px] rounded-[32px] text-[15px] w-full pl-[10px]'
                                                placeholder='Tìm Kiếm Việc Làm'></input>
                                        </div>
                                    </div>

                                </div>
                                <div className='ml-[8px] mr-[3px] w-[180px] flex items-center'>
                                    <button className='w-full h-[42px] rounded-[48px] px-16px flex justify-center items-center bg-orange-400 text-white hover:bg-orange-700'>Tìm Kiếm</button>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-[12px] shadow-slate-300 flex justify-center'>
                            <div className='max-w-[1200px] px-[16px] mx-[auto]'>
                                <a href='/' className=''>
                                    <img src='https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2Fvinhome_hrbn24_125417.jpg&w=1920&q=75'
                                        className='h-auto w-full' />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-semibold text-[22px] text-white mb-[20px] mt-[20px]'>Các Công Ty Hàng Đầu</h2>
                        </div>
                        <div class="flex flex-row justify-center max-w-[1200px] ">
                            <div class="basis-1/6 p-[16px] m-[6px] bg-white rounded-[6px] text-center border-solid border-1 ">
                                <a href='https://www.vietnamworks.com/company/techcombank?utm_campaign_navi=1022665&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage'
                                className='flex flex-col justify-center items-center'>
                                    <img src='https://images.vietnamworks.com/logo/Techcom_vip_125303.jpg' className='w-[128px] h-[128px] mb-[30px]'/>
                                    <div className='text-[15px] text-center font-bold text-black h-[44px] mb-[6px] w-full'>TECHCOMBANK</div>
                                    
                                </a>
                            </div>
                            <div class="basis-1/6 p-[16px] m-[6px] bg-white rounded-[6px] text-center border-solid border-1 ">
                                <a href='https://www.vietnamworks.com/company/crystalmartinvietnam?utm_campaign_navi=1360620&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage'
                                className='flex flex-col justify-center items-center'>
                                    <img src='https://images.vietnamworks.com/logo/crystal_vip24_100524.jpg' className='w-[128px] h-[128px] mb-[30px]'/>
                                    <div className='text-[15px] text-center font-bold text-black h-[44px] mb-[6px] w-full'>CRYSTAL MARTIN VIỆT NAM</div>
                                    
                                </a>
                            </div>
                            <div class="basis-1/6 p-[16px] m-[6px] bg-white rounded-[6px] text-center border-solid border-1 ">
                                <a href='https://www.vietnamworks.com/company/cilc-hn?utm_campaign_navi=6405528&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage'
                                className='flex flex-col justify-center items-center'>
                                    <img src='https://images.vietnamworks.com/logo/chaileaseN_vip1_125914.png' className='w-[128px] h-[128px] mb-[30px]'/>
                                    <div className='text-[15px] text-center font-bold text-black h-[44px] mb-[6px] w-full'>CHAILEASEN - CHI NHÁNH HÀ NỘI</div>
                                    
                                </a>
                            </div>
                            <div class="basis-1/6 p-[16px] m-[6px] bg-white rounded-[6px] text-center border-solid border-1 ">
                                <a href='https://www.vietnamworks.com/companies/lg-electronics-development-viet-nam-company-limited-c362598?utm_campaign_navi=7020947&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage'
                                className='flex flex-col justify-center items-center'>
                                    <img src='	https://images.vietnamworks.com/logo/Lg_vip_125989.png' className='w-[128px] h-[128px] mb-[30px]'/>
                                    <div className='text-[15px] text-center font-bold text-black h-[44px] mb-[6px] w-full'>LG VIỆT NAM</div>
                                    
                                </a>
                            </div>
                            <div class="basis-1/6 p-[16px] m-[6px] bg-white rounded-[6px] text-center border-solid border-1 ">
                                <a href='https://www.vietnamworks.com/company/asahi-intecc-ha-noi?utm_campaign_navi=1334819&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage'
                                className='flex flex-col justify-center items-center'>
                                    <img src='https://images.vietnamworks.com/logo/asahi_vip_126052.jpg' className='w-[128px] h-[128px] mb-[30px]'/>
                                    <div className='text-[15px] text-center font-bold text-black h-[44px] mb-[6px] w-full'>ASAHI INTECC HÀ NỘI</div>
                                    
                                </a>
                            </div>
                            <div class="basis-1/6 p-[16px] m-[6px] bg-white rounded-[6px] text-center border-solid border-1 ">
                                <a href='https://www.vietnamworks.com/company/jotun?utm_campaign_navi=630644&utm_medium_navi=viplogo&utm_source_navi=vnw_homepage&utm_term_navi=new-homepage'
                                className='flex flex-col justify-center items-center'>
                                    <img src='https://images.vietnamworks.com/logo/jotun_vip_125681.jpg' className='w-[128px] h-[128px] mb-[30px]'/>
                                    <div className='text-[15px] text-center font-bold text-black h-[44px] mb-[6px] w-full'>JOTUN VIET NAM</div>
                                    
                                </a>
                            </div>
                           
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Section1;