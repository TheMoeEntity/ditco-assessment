import { sideContext } from "@/Helpers/contextAPI/sidebar-context";
import React, { useContext } from "react";

const Header = () => {
  const { setSideBar, sidebar } = useContext(sideContext)
  return (
    <div className={"px-5 py-3 trans border-b-[1px] bg-white flex justify-between items-center lg:pl-[19rem] " + (sidebar && 'pl-[19rem]')}>
      <div className="font-semibold flex"><button className="lg:hidden" onClick={() => { setSideBar(!sidebar) }}><i className="fas fa-bars mr-4"></i></button>Home</div>
      <div className={"bg-[#F5F5F5] rounded-lg  md:block relative " + (sidebar ? 'hidden' : 'block')}>
        <input
          type="search"
          className="bg-transparent py-3 h-full border-none outline-none pl-8"
          name=""
          id=""
          placeholder="Search..."
        />
        <i className="fa-solid top-1/2 left-3 text-sm text-gray-500 -translate-y-1/2 absolute fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Header;
