import { useState } from "react";
import ActionBar from "./components/action-bar.component";
import PageTable from "./components/page-table.component";
import SlimSideBar from "./components/slim-side-bar.component";
import ExpandedSideBar from "./components/expanded.side-bar.component";
import "./home.styles.css";

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
