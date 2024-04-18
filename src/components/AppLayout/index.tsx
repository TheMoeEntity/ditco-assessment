"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { UserProvider } from "@/Helpers/contextAPI/sidebar-context";
import { usePathname } from "next/navigation";
import { useClientMediaQuery } from "@/Helpers/Hooks";
import { Toaster } from "react-hot-toast";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSideBar] = useState(false);
  const isMD = useClientMediaQuery('(min-width: 768px)');
  useEffect(() => {
    if (isMD === true) {
      setSideBar(true)
    }
    console.log(isMD)
  }, [isMD])
  const pathname = usePathname();
  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            zIndex: '9999999999999999999999999999999999999999999999999',
            background: 'white'
          }
        }}
      />
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
