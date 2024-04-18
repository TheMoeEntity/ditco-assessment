"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { UserProvider } from "@/Helpers/contextAPI/sidebar-context";
import { usePathname } from "next/navigation";
import { useClientMediaQuery } from "@/Helpers/Hooks";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSideBar] = useState(false);
  const isMD = useClientMediaQuery('(min-width: 768px)');
  useEffect(()=> {
    if (isMD === true) {
      setSideBar(true)
    }
    console.log(isMD)
  },[isMD])
  const pathname = usePathname();
  return (
    <div>
      <UserProvider>
        {pathname !== "/signup" && (
          <>
            <Header />
            <Sidebar />
          </>
        )}

        {children}
      </UserProvider>
    </div>
  );
};

export default AppLayout;
