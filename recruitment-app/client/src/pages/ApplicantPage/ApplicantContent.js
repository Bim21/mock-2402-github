import React, { useState } from "react";
import { Layout, Menu, Switch } from "antd";
// import 'antd/dist/antd.css';
import { IoSpeedometerOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineWork } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BiExit } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { VscFiles } from "react-icons/vsc";
import { MdPreview } from "react-icons/md";
import { IoDownloadSharp } from "react-icons/io5";
import TabSection from "./section/TabSection";
import Section2 from "./section/Section2";
import Section3 from "./section/Section3";
import { IoPencil } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../utils/funcHelpers";
import ApplyModal from "../../component/jobComponent/JobDetail/ApplyModal";
import { toast } from "react-toastify";
import { Button, Flex } from 'antd';
import { LiaLinkedin } from "react-icons/lia";
import Bottom from "./Bottom";


const userInfo = getUserInfo();

const { Header, Sider, Content } = Layout;

const ApplicantContent = (props) => {
    const navigate = useNavigate();
    const [isApply, setIsApply] = useState(true);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        gender: "",
        title: "",
        dob: "",
        degree: "",
        fieldJob: "",
        level: "",
        minimumYearsOfExperience: "",
        career: "",
        salary: "",
        phoneNumber: "",
        address: "",
    });

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        } catch (error) {
            toast.error("");
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider width={320} theme="light">
                <div className="w-auto h-56 bg-blue-500 rounded-[9px] flex flex-col ">
                    <div className="h-20 flex flex-row items-center text-white">
                        <VscAccount className="w-16 h-16 mt-2 ml-2" />

                        <div className="pl-5">
                            <div className="text-[16px] font-bold">Nguyen Chien</div>
                            <div className="text-[16px] font-medium">Nhan Vien</div>
                        </div>

                        <BiExit className="text-[30px] ml-16 mb-8" />
                    </div>

                    <div className=" mt-7 w-70 h-24  ml-3 mr-3 bg-slate-50 rounded-[5px]">

                        <div className="flex flex-row gap-14 items-center">
                            <div className="text-black text-[14px] font-medium mt-2 ml-5">
                                Cho phep tim kiem ho so
                            </div>
                            <Switch defaultChecked onChange={onChange} />

                        </div>

                        <div className="text-slate-600 text-[13px] mt-2 ml-5">
                            Ho so chua du dieu kien cho phep tim kiem
                        </div>

                        <button
                            className="text-blue-800 mt-2 text-[14px]  ml-5"
                            type="button"
                        >
                            Thiet lap ho so
                        </button>
                    </div>
                </div>
                <Menu theme="" mode="inline" className="mt-2 bg-slate-100 h-auto">
                    <div className="flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2">
                        <IoSpeedometerOutline className="w-auto h-auto" />
                        <Menu.Item className="">Tổng Quan</Menu.Item>
                    </div>

                    <div className="flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2">
                        <ImProfile className="w-auto h-auto" />
                        <Menu.Item className="">Hồ Sơ Của Tôi</Menu.Item>
                    </div>

                    <div className="flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2">
                        <HiOutlineBuildingOffice2 className="w-auto h-auto" />
                        <Menu.Item className="">Công Ty Của Tôi</Menu.Item>
                    </div>

                    <div className="flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2">
                        <MdOutlineWork className="w-auto h-auto" />
                        <Menu.Item className="">Việc Làm Của Tôi</Menu.Item>
                    </div>

                    <div className="flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2">
                        <IoMdNotificationsOutline className="w-auto h-auto" />
                        <Menu.Item className="">Thông Báo Việc làm</Menu.Item>
                    </div>

                    <div className="flex justify-center items-center pl-5 bg-slate-200 text-[16px] gap-3 h-16 rounded-[5px] mt-2">
                        <IoMdSettings className="w-auto h-auto" />
                        <Menu.Item className="">Quản Lý Tài Khoản</Menu.Item>
                    </div>


                    <div className="flex justify-center items-center bg-orange-500 text-[16px]  text-white gap-3 h-12 rounded-[5px] mt-2 pl-14">
                        <IoMdNotificationsOutline className="w-auto h-auto text-2xl" />
                        <Menu.Item className="text-lg font-medium">Tạo Thông Báo Việc Làm</Menu.Item>
                    </div>
                </Menu>
            </Sider>
            <Layout className="w-[80vh]">

                {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                <Content style={{ margin: "24px 16px 0" }}>
                    <div style={{ padding: 24, background: "#f1f2f4", minHeight: 720 }}>
                        <div className="flex flex-col justify-evenly h-full w-full mt-0">
                            <div className="w-[full] h-44 bg-white rounded-[9px] mt-0">
                                <div className="flex flex-row ">
                                    <BsFillPersonFill className="text-slate-300 text-9xl ml-2" />

                                    <div className="flex flex-col ml-5">
                                        <div className="text-4xl font-bold">Trinh Trinh</div>
                                        <div className="text-lg">
                                            Thêm Chức Danh - Thêm Số năm kinh nghiệm
                                        </div>

                                        <div className="text-xl">
                                            <div className="flex flex-row gap-2 items-center">
                                                <MdOutlineWork />
                                                Thêm Cấp Bậc Hiện Tại
                                            </div>

                                            <div className="flex flex-row gap-2 items-center">
                                                <IoIosMail />
                                                trinhlee297@gmail.com
                                            </div>

                                            <div className="flex flex-row gap-2 items-center">
                                                <IoHomeSharp />
                                                Thêm Địa Chỉ
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <button className="" onClick={openModal}>
                                            <IoPencil className="text-2xl ml-72" />
                                        </button>

                                        <ApplyModal
                                            data={formData}
                                            isOpen={isOpenModal}
                                            handleChange={handleChange}
                                            onClose={closeModal}
                                            handleSubmit={handleSubmit}
                                            title={"Lưu"}
                                        />

                                        <div className="flex flex-row pl-96 items-center text-xl gap-2">
                                            <GiGraduateCap />
                                            Thêm Bằng Cấp Cao Nhất
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[full] h-44 bg-white rounded-[9px] mt-4 pt-5 flex flex-row">
                                <div className="flex flex-col ml-4 ">
                                    <div className="text-3xl font-bold">Công Việc Mong Muốn</div>

                                    <div className="text-[20px] text-slate-500">
                                        <div className="mt-8">Nơi làm việc</div>

                                        <div>Mức lương mong muốn (USD / tháng)</div>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-16 text-[20px] text-black pl-12 font-medium">
                                    <div>Thêm nơi làm việc</div>
                                    <div>Thêm mức lương mong muốn</div>
                                </div>
                            </div>

                            <div>
                                <div className=" mt-3 ml-3 text-xl gap-10 hover:cursor-pointer">
                                    <TabSection />
                                </div>

                                {/* <div className="w-[full] h-52 bg-white rounded-[9px] mt-4 pt-5 flex flex-row">
                                    <Section2 />
                                </div> */}

                                <div className="w-[full] h-full flex flex-col">
                                    <Section3 />
                                </div>
                            </div>


                            <div className="w-[full] h-44 bg-white rounded-[9px] mt-4 pt-5 flex flex-row">
                                <div>
                                    <div className="flex items-center">
                                        <a href="/" title="Home Page">
                                            <img
                                                src="https://images.vietnamworks.com/images/linkedin/icon-linkedin.svg"
                                                alt=""
                                                className="w-[167px] h-[40]"
                                            />
                                        </a>
                                    </div>
                                </div>


                                <div className="flex flex-col gap-3">
                                    <div className="text-xl font-bold">Tiết kiệm thời gian bằng cách nhập hồ sơ LinkedIn hiện có của bạn!</div>
                                    <div className="text-lg">Thông tin hồ sơ VietnamWorks sẽ được thay thế bằng thông tin từ tài khoản LinkedIn của bạn. Ví dụ: kỹ
                                        <div>năng,học vấn, kinh nghiệm,… và bạn không thể hoàn tác.</div>
                                    </div>


                                    <Button className="flex items-center" type="primary">

                                        <LiaLinkedin />
                                        <div className="w-36 text-xl font-bold ">
                                            Nhap ho so
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default ApplicantContent;
