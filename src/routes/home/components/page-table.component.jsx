import { useLayoutEffect, useState, useRef } from "react";

import { pages } from "./pages-data";

import {
  CalendarIcon,
  ChevronDownIcon,
  ArrowSmRightIcon,
  LockClosedIcon,
  PencilAltIcon,
  TrashIcon,
  CheckIcon,
} from "@heroicons/react/solid";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const PageTable = () => {
  const checkbox = useRef();
  const [people, setPeople] = useState(pages);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  const toggleAll = () => {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  };

  const handleOpenTask = (page) => {
    console.log(page);
  };

  return (
    <table
      className="divide-y divide-gray-300 w-full"
      style={{ marginTop: "66px" }}
    >
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
            <input
              type="checkbox"
              className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
              ref={checkbox}
              checked={checked}
              onChange={toggleAll}
            />
          </th>
          <th
            scope="col"
            className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900"
          >
            ID
          </th>
          <th
            scope="col"
            className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900"
          >
            Flags
          </th>
          <th
            scope="col"
            className="px-3 py-1.5 text-center text-xs font-semibold text-gray-900"
          >
            Text
          </th>
          <th
            scope="col"
            className="px-3 py-1.5 text-center text-xs font-semibold text-gray-900"
          >
            % Trans
          </th>
          <th
            scope="col"
            className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900"
          >
            Words
          </th>
          <th
            scope="col"
            className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900"
          >
            Files
          </th>
          <th
            scope="col"
            className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900"
          >
            Created
          </th>
          <th
            scope="col"
            className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900"
          >
            Updated
          </th>
          <th
            scope="col"
            className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900"
          >
            Assigned
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Edit</span>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {people.map((person) => (
          <tr
            key={person.email}
            className={
              selectedPeople.includes(person)
                ? "bg-gray-100"
                : "hover:bg-gray-100"
            }
          >
            <td className="relative w-12 px-6 sm:w-16 sm:px-8">
              {selectedPeople.includes(person) && (
                <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
              )}
              <input
                type="checkbox"
                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                value={person.email}
                checked={selectedPeople.includes(person)}
                onChange={(e) =>
                  setSelectedPeople(
                    e.target.checked
                      ? [...selectedPeople, person]
                      : selectedPeople.filter((p) => p !== person)
                  )
                }
              />
            </td>
            <td
              className={classNames(
                "whitespace-nowrap py-2 pr-3 text-xs font-medium",
                selectedPeople.includes(person)
                  ? "text-indigo-600"
                  : "text-gray-900"
              )}
            >
              <span className="ml-1 font-medium text-indigo-600 truncate cursor-pointer">
                88280213
              </span>
              <span
                className="ml-1 flex-shrink-0 font-normal text-gray-500"
                style={{ fontSize: "10px" }}
              >
                OSO-HTML
              </span>
            </td>
            <td className="whitespace-nowrap px-3 py1.5 text-xs text-gray-500">
              <div className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                <LockClosedIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                <PencilAltIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                <TrashIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py1.5 text-xs text-gray-500 bg-green-100 text-center">
              <span className="px-1.5 inline-flex text-xs leading-5 text-gray-500">
                New
              </span>
            </td>
            <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500 text-center">
              <div className="text-xs">98%</div>
            </td>
            <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500">
              <div className="text-xs">5,678</div>
            </td>
            <td className="whitespace-nowrap px-3 py-1.5 text-xs ">
              <CheckIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            </td>
            <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500">
              <span className="text-xs">04-29 08:58 AM</span>
              <span className="ml-2">(TS)</span>
            </td>
            <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500">
              <span className="text-xs">04-29 08:58 AM</span>
              <span className="ml-2">(AP)</span>
            </td>
            <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500">
              <span className="text-xs">04-29 08:58 AM</span>
              <div className="text-xs inline-block ml-1">
                <span className="font-semibold bg-sky-100  px-1">PTS</span>{" "}
                <ArrowSmRightIcon className="h-3 w-3 inline-block" />{" "}
                <span>edelgado</span>{" "}
                <ArrowSmRightIcon className="h-3 w-3 inline-block" />{" "}
                <span>adeberry</span>
              </div>
            </td>
            <td>
              <ChevronDownIcon
                onClick={() => handleOpenTask(person)}
                className="h-4 w-4 text-gray-400 cursor-pointer"
              />
              {/* Use Feeds for the activity */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PageTable;
