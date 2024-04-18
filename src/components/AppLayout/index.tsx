"use client";
import React, { ReactNode, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { UserProvider } from "@/Helpers/contextAPI/sidebar-context";
import { usePathname } from "next/navigation";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSideBar] = useState(false);
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
