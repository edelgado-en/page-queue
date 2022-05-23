import {
  LogoutIcon,
  SearchIcon,
  UsersIcon,
  BriefcaseIcon,
  StarIcon,
  DocumentIcon,
} from "@heroicons/react/solid";

import ReactTooltip from "react-tooltip";

const SlimSideBar = ({ handleSideBarExpanded }) => {
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

export default SlimSideBar;
