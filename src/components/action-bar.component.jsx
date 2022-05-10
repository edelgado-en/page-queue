import Dropdown from './dropdown.component';

const ActionBar = () => {
    return (
        <>
            <div className="shadow sm:rounded-md m-3 mt-0 md:px-3 h-14 mb-5 fixed z-10 bg-white border-solid border-b-2 border-gray-200 p-2 w-screen" style={{ paddingTop: '12px' }}>
                <span className="text-xs mr-4">1,439 Tasks</span>
                <Dropdown />
                {/* <button
                    type="button"
                    className="ml-3 inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Select All
                </button> */}
            </div>
            <div className="mt-36"></div>
        </>
    )
}

export default ActionBar;