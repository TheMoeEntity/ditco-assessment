import { sideContext } from "@/Helpers/contextAPI/sidebar-context";
import Image from "next/image";
import React, { useContext } from "react";
import logo from '../../../public/images/logo.png'

const Sidebar = () => {
  const { setSideBar, sidebar } = useContext(sideContext);
  return (
    <div
      className={`w-[18rem] trans justify-between border-r-[1px] py-6 bg-white flex flex-col h-full top-0 ${sidebar ? "left-0" : "-left-[100%]"
        } lg:left-0 fixed z-30`}
    >
      <div className="flex flex-col gap-y-10">
        <div className="md:w-[80%] mx-auto" >
          <Image
            src={logo}
            alt="winterman"
            quality={100}
            sizes={"100vw"}
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="flex flex-col text-gray-500 px-3">
          <button className="text-[#367F5E] bg-[#EFF5F3] px-6 py-5 flex items-center gap-x-5 hover:text-[#367F5E] rounded-lg hover:bg-[#EFF5F3]">
            <i className="fa-solid fa-house hover:text-[#367F5E]"></i>Home
          </button>
          <button className="px-6 py-5 flex items-center gap-x-5 hover:text-[#367F5E] rounded-lg hover:bg-[#EFF5F3]">
            <i className="fas fa-users"></i>Customer
          </button>
          <button className="px-6 py-5 flex items-center gap-x-5 hover:text-[#367F5E] rounded-lg hover:bg-[#EFF5F3]">
            <i className="fa-solid fa-cube"></i>Product
          </button>{" "}
          <button className="px-6 py-5 flex items-center gap-x-5 hover:text-[#367F5E] rounded-lg hover:bg-[#EFF5F3]">
            <i className="fa-solid fa-money-bill"></i>Transaction
          </button>
          <button className="px-6 py-5 flex items-center gap-x-5 hover:text-[#367F5E] rounded-lg hover:bg-[#EFF5F3]">
            <i className="fa-solid fa-history"></i>Log Activity
          </button>
        </div>
      </div>

      <div className="text-center flex gap-x-3 ml-7 items-center text-red-300">
        <i className="fa-solid fa-sign-out-alt"></i>Logout
      </div>
    </div>
  );
};

export default Sidebar;
