import { useState } from "react";
import ActionBar from "./components/actionBar/action-bar.component";
import PageTable from "./components/tasks/page-table.component";
import SlimSideBar from "./components/sidebar/slim/slim-side-bar.component";
import ExpandedSideBar from "./components/sidebar/expanded/expanded.side-bar.component";

import SideBar from "./components/sidebar/sideBar";

import { useAppSelector } from "../../app/hooks";

import { selectIsExpanded } from "./components/sidebar/sideBarSlice";

const Home = () => {
  const isExpanded = useAppSelector(selectIsExpanded);

  return (
    <>
      <div style={{ marginTop: "65px" }}></div>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <div
            className="mt-1"
            style={{ marginLeft: isExpanded ? "257px" : "57px" }}
          >
            <ActionBar />
            <PageTable />
            <div className="p-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
