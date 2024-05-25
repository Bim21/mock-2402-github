import React from "react";
import ItemJob from "./ItemJob";
import SectionJob3 from "./SectionJob3";
import Insurance from "./Insurance";

const Section1 = (props) => {
  const jobs = props.jobs;
  return (
    <section className="mt-[10px] flex flex-row bg-slate-50">
      <div className="basis-8/12">
        <div className="flex flex-col justify-center w-full">
          <div className="pr-[10px] w-full">
            <div className="flex flex-col">
              <div class="flex w-full">
                <ItemJob jobs={jobs} />
              </div>
              <SectionJob3 />
              <div className="w-full border-[1px] border-gray-200 bg-white">
                <Insurance />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="basis-4/12 flex flex-col">
        <div className="mb-[5px] border-[1px] border-gray-300">
          <a href="/" className="">
            <img
              src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F500x600-7_126232.png&w=1920&q=75"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </div>
        <div className="mb-[5px] border-[1px] border-gray-300">
          <a href="/" className="">
            <img
              src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F2-500x600_125460.png&w=1920&q=75"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </div>
        <div className="">
          <a href="/" className="">
            <img
              src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F7_500x1200_125570.jpg&w=1920&q=75"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </div>
        <div>
          <a href="/" className="">
            <img
              src="https://www.vietnamworks.com/_next/image?url=https%3A%2F%2Fimages.vietnamworks.com%2Flogo%2F500x600%20(6)_126083.png&w=1920&q=75"
              alt=""
              className="w-full h-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section1;
