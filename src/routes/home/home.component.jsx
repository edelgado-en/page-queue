import { useState } from "react";
import {
  LoginIcon,
  LogoutIcon,
  SearchIcon,
  UsersIcon,
  BriefcaseIcon,
  StarIcon,
  DocumentIcon,
} from "@heroicons/react/solid";

import ActionBar from "./components/action-bar.component";
import PageTable from "./components/page-table.component";
import Search from "../../components/search.component";

import ReactTooltip from "react-tooltip";
import LSPDashboard from "../../components/lsp-dashboard.component";
import UserStats from "../../components/user-stats.component";
import "./home.styles.css";

const Home = () => {
  const [sideBarExpanded, setSideBarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("search"); //use Enum or Constant

  const handleSideBarExpanded = () => {
    //setShowMore(false); //need to dispatch this
    setSideBarExpanded(!sideBarExpanded);
  };

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const SlimSideBar = () => {
    return (
      <div className="fixed flex bg-gray-100 min-h-screen flex-col z-50 border-r-2 p-4 w-14">
        <ReactTooltip
          id="sidebar"
          place="right"
          type="dark"
          effect="solid"
          className="tooltip-general"
          multiline={true}
        />
        <LogoutIcon
          data-for="sidebar"
          data-tip="Expand"
          data-iscapture="true"
          className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer"
          onClick={handleSideBarExpanded}
        />
        <SearchIcon
          className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6"
          onClick={handleSideBarExpanded}
        />
        <BriefcaseIcon
          className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6"
          onClick={handleSideBarExpanded}
        />
        {/* LSP */}
        <UsersIcon
          className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6"
          onClick={handleSideBarExpanded}
        />
        {/* linguist pending workload distribution. Add tooltip  */}
        <StarIcon
          className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6"
          onClick={handleSideBarExpanded}
        />
        {/* prefered search */}
        <DocumentIcon
          className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6"
          onClick={handleSideBarExpanded}
        />
        {/* New Segment */}
      </div>
    );
  };

  const ExpandedSideBar = () => {
    return (
      <div className="fixed bg-gray-100 min-h-screen flex-col z-50 border-r-2 p-3 w-64 h-full">
        <div className="flex flex-row h-[4%]">
          <div className="basis-[90%]">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-5">
                <a
                  onClick={() => handleSetActiveTab("search")}
                  className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2
                              font-medium text-xs
                              ${
                                activeTab === "search"
                                  ? "border-indigo-500 text-indigo-600"
                                  : "hover:text-gray-700 hover:border-gray-300"
                              }
                              `}
                >
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </a>

                <a
                  onClick={() => handleSetActiveTab("lsp")}
                  className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2
                             font-medium text-xs border-transparent
                              ${
                                activeTab === "lsp"
                                  ? "border-indigo-500 text-indigo-600"
                                  : "hover:text-gray-700 hover:border-gray-300"
                              }
                             `}
                >
                  <BriefcaseIcon className="h-5 w-5 text-gray-400" />
                </a>

                <a
                  onClick={() => handleSetActiveTab("users")}
                  className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2
                    font-medium text-xs border-transparent
                     ${
                       activeTab === "users"
                         ? "border-indigo-500 text-indigo-600"
                         : "hover:text-gray-700 hover:border-gray-300"
                     }
                    `}
                >
                  <UsersIcon className="h-5 w-5 text-gray-400" />
                </a>

                <a
                  onClick={() => handleSetActiveTab("preferredSearches")}
                  className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2
                    font-medium text-xs border-transparent
                     ${
                       activeTab === "preferredSearches"
                         ? "border-indigo-500 text-indigo-600"
                         : "hover:text-gray-700 hover:border-gray-300"
                     }
                    `}
                >
                  <StarIcon className="h-5 w-5 text-gray-400" />
                </a>
              </nav>
            </div>
          </div>
          <div className="basis-[10%] pt-1">
            <LoginIcon
              className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer"
              onClick={handleSideBarExpanded}
            />
          </div>
        </div>

        {activeTab === "search" && <Search />}

        {activeTab === "lsp" && <LSPDashboard />}

        {activeTab === "users" && <UserStats />}
      </div>
    );
  };

  return (
    <>
      <div style={{ marginTop: "65px" }}></div>
      <div class="flex">
        {sideBarExpanded ? <ExpandedSideBar /> : <SlimSideBar />}

        <div class="w-full">
          <div
            class="mt-1"
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
