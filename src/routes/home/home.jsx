import { useState } from "react";
import ActionBar from "./components/actionBar/action-bar.component";
import PageTable from "./components/tasks/page-table.component";
import SlimSideBar from "./components/sidebar/slim/slim-side-bar.component";
import ExpandedSideBar from "./components/sidebar/expanded/expanded.side-bar.component";

import { useAppSelector, useAppDispatch } from "../../app/hooks";

const Home = () => {
  const [sideBarExpanded, setSideBarExpanded] = useState(false);

  const handleSideBarExpanded = () => {
    //setShowMore(false); //need to dispatch this
    setSideBarExpanded(!sideBarExpanded);
  };

  return (
    <>
      <div style={{ marginTop: "65px" }}></div>
      <div className="flex">
        {/* In here import a component that decides this. Call it sidebar */}
        {sideBarExpanded ? (
          <ExpandedSideBar handleSideBarExpanded={handleSideBarExpanded} />
        ) : (
          <SlimSideBar handleSideBarExpanded={handleSideBarExpanded} />
        )}

        <div className="w-full">
          <div
            className="mt-1"
            style={{ marginLeft: sideBarExpanded ? "257px" : "57px" }}
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
