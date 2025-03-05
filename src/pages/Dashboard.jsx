import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import { Skeleton } from "primereact/skeleton"; 
import Banner from "../partials/Banner";

// Import dashboard cards
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {loading ? (
              // Loading State (Spinner + Skeleton)
              <div className="flex flex-col items-center justify-center h-96 space-y-6">
                {/* Inline Loading Spinner */}
                <div className="flex items-center space-x-2">
                  <svg
                    className="animate-spin h-8 w-8 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Loading...
                  </span>
                </div>

                {/* Skeleton Cards */}
                <div className="grid grid-cols-12 gap-6 w-full">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="col-span-12 sm:col-span-6 lg:col-span-4"
                    >
                      <div className="bg-gray-800 rounded-lg p-4 shadow-lg w-full h-72">
                        <Skeleton className="w-full h-64 bg-gray-700 rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Dashboard Actions */}
                <div className="sm:flex sm:justify-between sm:items-center mb-8">
                  {/* Left: Title */}
                  <div className="mb-4 sm:mb-0">
                    <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                      Dashboard
                    </h1>
                  </div>

                  {/* Right: Actions */}
                  <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                    <FilterButton align="right" />
                    <Datepicker align="right" />
                    <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                      <svg
                        className="fill-current shrink-0 xs:hidden"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                      </svg>
                      <span className="max-xs:sr-only">Add View</span>
                    </button>
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-12 gap-6">
                  <DashboardCard01 />
                  <DashboardCard02 />
                  <DashboardCard03 />
                  <DashboardCard04 />
                  <DashboardCard05 />
                  <DashboardCard06 />
                  <DashboardCard07 />
                  <DashboardCard08 />
                  <DashboardCard09 />
                  <DashboardCard10 />
                  <DashboardCard11 />
                  <DashboardCard12 />
                  <DashboardCard13 />
                </div>
              </>
            )}
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;
