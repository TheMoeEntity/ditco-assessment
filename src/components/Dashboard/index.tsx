"use client";
import { sideContext } from "@/Helpers/contextAPI/sidebar-context";
import { useContext, useState } from "react";
import Charts from "../Cards/Charts";
import SalesCharts from "../Cards/SalesCharts";
import { dashAssets } from "@/Helpers/constants";
import Sales from "../Cards/Sales";

const Dashboard = () => {
  const { sidebar } = useContext(sideContext);

  return (
    <div className="flex w-full overflow-hidden text-black bg-[#fafafa] flex-col gap-y-5 py-7 px-5 min-h-full relative transition-all duration-700">
      <div
        className={
          `w-full flex flex-col gap-y-5 trans mx-auto lg:pl-[18rem] ` +
          (sidebar && "pl-[19rem]")
        }
      >
        <div className="flex flex-col gap-y-5">
          <h1 className="font-semibold text-2xl text-black md:text-4xl">
            Welcome back, Antonio
          </h1>
          <p className="text-gray-400 md:w-[67%]">
            Track your sales performance at a glance with our dynamic dashboard,
            providing real-time insights on revenue, conversions, and customer
            acquisition.{" "}
          </p>
        </div>

        <div className="flex flex-col m-auto no-scrollbar mt-7 p-auto w-full">
          <div className="flex overflow-x-scroll no-scrollbar pb-10 no-scrollbar">
            <div className="flex gap-5 flex-nowrap mr-10 whitespace-nowrap">
              {dashAssets.map((x, i) => (
                <div
                  className="min-w-[190px] max-w-full w-full flex justify-center items-center gap-x-5 border-[1px] rounded-lg px-8 py-7"
                  key={i}
                >
                  <div>
                    <div className={"flex items-center justify-center rounded-full w-[56px] h-[56px] " + (x.color)}>
                      <span className={"text-xl " + (x.icon) + ` ${x.iconColor}`}></span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-4 items-stretch justify-between">
                    <span className="font-semibold md:text-3xl text-2xl">
                      {x.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                    </span>
                    <span className="text-gray-500">{x.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className=" hidden md:flex flex-col m-auto no-scrollbar mt-7 p-auto w-full">
          <div className="flex overflow-x-scroll no-scrollbar pb-10 no-scrollbar">
            <div className="flex gap-5 flex-wrap md:flex-nowrap mr-10 whitespace-nowrap">
              <SalesCharts />
              <Sales />
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-y-4">
          <SalesCharts />
          <Sales />
        </div>
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;
