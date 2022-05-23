import SlimSideBar from "./slim/slim-side-bar.component";
import ExpandedSideBar from "./expanded/expanded.side-bar.component";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { toggleExpanded, selectIsExpanded } from "./sideBarSlice";

const SideBar = () => {
  const isExpanded = useAppSelector(selectIsExpanded);
  const dispatch = useAppDispatch();

  const handleSideBarExpanded = () => {
    //setShowMore(false); //need to dispatch this
    dispatch(toggleExpanded());
  };

  return (
    <>
      {isExpanded ? (
        <ExpandedSideBar handleSideBarExpanded={handleSideBarExpanded} />
      ) : (
        <SlimSideBar handleSideBarExpanded={handleSideBarExpanded} />
      )}
    </>
  );
};

export default SideBar;
