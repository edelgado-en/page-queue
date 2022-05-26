import { useState } from "react";

import Select from "react-select";

import { STANDARD_DROPDOWN_STYLES } from "../../../../../../contants";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useAppSelector, useAppDispatch } from "../../../../../../app/hooks";
import {
  selectStatuses,
  selectSelectedStatus,
  handleDropdownChange,
} from "./searchSlice";

const options = [
  { value: 1, label: "New" },
  { value: 2, label: "In Progress" },
  { value: 3, label: "Completed" },
];

const contractors = [
  { value: -1, label: "All" },
  { value: 1, label: "Contractor 1" },
  { value: 2, label: "Contractor 2" },
];

const defaultFormFields = {
  statuses: options,
  contractors,
  selectedStatus: options[0],
  selectedContractor: contractors[0],
};

const Search = () => {
  const dispatch = useAppDispatch();
  const statuses = useAppSelector(selectStatuses);
  const selectedStatus = useAppSelector(selectSelectedStatus);

  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [showMore, setShowMore] = useState(false);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { contractors, selectedContractor } = formFields;

  const handleResetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  /**
   * Because of the nature of the dropdown, we need to have a handler for dropdown and a different
   * handler for regular text input fields.
   *
   * @param {*} option refers to the object coming from the Select dropdown in the form of: { value: int, label: string }
   * @param {*} name the name of the key:string refering to the dropdown. Look at defaultFormFields
   */
  const handleChange = (option, name) => {
    //setFormFields({ ...formFields, [name]: option });
    dispatch(handleDropdownChange({ option, name }));
  };

  const handleSearch = () => {
    const { selectedContractor } = formFields;

    console.log(selectedStatus);
    console.log(selectedContractor);
  };

  return (
    <>
      <div className="mt-2 px-3 overflow-y-auto lg:h-[80%] md:h-[70%] sm:h-[60%]">
        {/* The filters that are never used should be hidden in a "show more link" because they are almost never used
                there is no need to keep showing them all the time.
                */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1 mt-2">
            Translation Status
          </label>
          <Select
            maxMenuHeight={850}
            styles={STANDARD_DROPDOWN_STYLES}
            value={selectedStatus}
            onChange={(option) => handleChange(option, "selectedStatus")}
            options={statuses}
          />

          <label className="block text-xs font-medium text-gray-700 mt-2 mb-1">
            Contractors
          </label>
          <Select
            maxMenuHeight={850}
            styles={STANDARD_DROPDOWN_STYLES}
            value={selectedContractor}
            onChange={(option) => handleChange(option, "selectedContractor")}
            options={contractors}
          />

          <label className="block text-xs font-medium text-gray-700 mt-2 mb-1">
            TAT Status
          </label>
          <Select
            maxMenuHeight={850}
            styles={STANDARD_DROPDOWN_STYLES}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />

          <label className="block text-xs font-medium text-gray-700 mt-2 mb-1">
            Flags
          </label>
          <Select
            maxMenuHeight={850}
            styles={STANDARD_DROPDOWN_STYLES}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />

          {!showMore && (
            <div className="w-full border-t border-gray-300 my-5" />
          )}

          <label
            htmlFor="ids"
            className={`block text-xs font-medium text-gray-700`}
          >
            Page Ids
          </label>
          <input
            type="text"
            name="ids"
            id="ids"
            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-xs border-gray-300 rounded-md"
            placeholder="1,2,3,4,5..."
          />

          {/* Put this in a component */}
          <label
            htmlFor="urls"
            className="block text-xs font-medium text-gray-700 mt-2"
          >
            Page Urls
          </label>
          <input
            type="text"
            name="urls"
            id="urls"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-xs border-gray-300 rounded-md"
            placeholder="url1,url2,url3..."
          />

          <label className="block text-xs font-medium text-gray-700 mt-2">
            Queue Start Date
          </label>
          <DatePicker
            selected={startDate}
            showTimeSelect
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-xs border-gray-300 rounded-md p-2"
            onChange={(date) => setStartDate(date)}
          />

          {!showMore && (
            <div
              onClick={handleShowMore}
              className="cursor-pointer text-xs text-blue-400 mt-6"
            >
              Show More
            </div>
          )}

          {showMore ? (
            <>
              <label className="block text-xs font-medium text-gray-700 mt-2">
                Queue End Date
              </label>
              <DatePicker
                selected={startDate}
                showTimeSelect
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-xs border-gray-300 rounded-md p-2"
                onChange={(date) => setStartDate(date)}
              />

              <label className="block text-xs font-medium text-gray-700 mt-2">
                Translation Type
              </label>
              <Select
                maxMenuHeight={850}
                styles={STANDARD_DROPDOWN_STYLES}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />

              <label className="block text-xs font-medium text-gray-700 mt-2">
                Content Type
              </label>
              <Select
                maxMenuHeight={850}
                styles={STANDARD_DROPDOWN_STYLES}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />

              <label className="block text-xs font-medium text-gray-700 mt-2">
                Project Code
              </label>
              <Select
                maxMenuHeight={850}
                styles={STANDARD_DROPDOWN_STYLES}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />

              <label className="block text-xs font-medium text-gray-700 mt-2">
                Priority
              </label>
              <Select
                maxMenuHeight={850}
                styles={STANDARD_DROPDOWN_STYLES}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />

              <label className="block text-xs font-medium text-gray-700 mt-2">
                Internal Reviewer
              </label>
              <Select
                maxMenuHeight={850}
                styles={STANDARD_DROPDOWN_STYLES}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />

              <label className="block text-xs font-medium text-gray-700 mt-2">
                Requested By
              </label>
              <Select
                maxMenuHeight={850}
                styles={STANDARD_DROPDOWN_STYLES}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </>
          ) : null}
        </div>
      </div>
      <div className="h-[15%] px-3 text-right py-4">
        <button
          onClick={handleResetFormFields}
          type="button"
          className="mr-3 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Pref Search
        </button>
        <button
          onClick={handleSearch}
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
