import React from 'react'
import { VscFiles } from "react-icons/vsc";
import { MdPreview } from "react-icons/md";
import { IoDownloadSharp } from "react-icons/io5";

const ContentTab1 = () => {
  return (
    <div className='w-[full] h-44 bg-white rounded-[9px] mt-4 pt-5 flex flex-row text-2xl'>
                                    <div className="flex ml-2">
                                         <img
                                                src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fwww.vietnamworks.com%2Fassets-wowcv%2Fimages%2Flist_templates%2Fcv_template_5.jpg&w=96&q=75"
                                                alt=""
                                                className="w-[75px] h-[auto]"
                                            />
                                    </div>

                                    <div className='text-xl ml-10 flex flex-col gap-4'>
                                        <div className='flex flex-row items-center gap-2 text-blue-700'>
                                            <VscFiles/>
                                            Thay đổi mẫu hồ sơ</div>
                                        <div className='flex flex-row items-center gap-2 text-blue-700'>
                                            <MdPreview/>
                                            Xem như nhà tuyển dụng</div>
                                        <div className='flex flex-row items-center gap-2 text-blue-700'>
                                            <IoDownloadSharp/>
                                            Tải xuống</div>

                                    </div>
                                </div>
  )
}

export default ContentTab1
