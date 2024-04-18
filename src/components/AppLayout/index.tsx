"use client";
import React, { ReactNode, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { UserProvider } from "@/Helpers/contextAPI/sidebar-context";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSideBar] = useState(false);
  return (
    <div>
      <UserProvider>
        <Header />
        <Sidebar />
        {children}
      </UserProvider>
    </div>
  );
};

export default AppLayout;
