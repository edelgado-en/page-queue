import {
  CalendarIcon,
  ChevronRightIcon,
  ArrowSmRightIcon,
  LockClosedIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";

import { useState, useRef, useLayoutEffect } from "react";

import ActionBar from "../home/components/action-bar.component";

const positions = [
  {
    id: 1,
    title: "Back End Developer",
  },
  {
    id: 2,
    title: "Front End Developer",
  },
  {
    id: 3,
    title: "User Interface Designer",
  },
  {
    id: 4,
    title: "User Interface Designer",
  },
  {
    id: 5,
    title: "User Interface Designer",
  },
  {
    id: 6,
    title: "User Interface Designer",
  },
  {
    id: 7,
    title: "User Interface Designer",
  },
  {
    id: 8,
    title: "User Interface Designer",
  },
  {
    id: 9,
    title: "User Interface Designer",
  },
  {
    id: 10,
    title: "User Interface Designer",
  },
  {
    id: 11,
    title: "User Interface Designer",
  },
  {
    id: 12,
    title: "User Interface Designer",
  },
  {
    id: 13,
    title: "User Interface Designer",
  },
  {
    id: 14,
    title: "User Interface Designer",
  },
  {
    id: 15,
    title: "User Interface Designer",
  },
  {
    id: 16,
    title: "User Interface Designer",
  },
  {
    id: 17,
    title: "User Interface Designer",
  },
  {
    id: 18,
    title: "User Interface Designer",
  },
  {
    id: 19,
    title: "User Interface Designer",
  },
];

export default function Example() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < positions.length;
    setChecked(selectedPeople.length === positions.length);
    setIndeterminate(isIndeterminate);
    //checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : positions);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <>
      <div style={{ marginTop: "66px" }}></div>

      <ActionBar />

      <div className="mt-36"></div>
      <div className="shadow overflow-hidden sm:rounded-md m-3 max-w-7xl mx-auto md:px-3">
        {/*     <input
                type="checkbox"
                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                ref={checkbox}
                checked={checked}
                onChange={toggleAll}
                /> */}
        <ul role="list" className="divide-y divide-gray-300">
          {positions.map((position) => (
            <li key={position.id}>
              <div className="px-2 py-2 flex flex-wrap hover:bg-gray-100">
                <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 md:mt-2 md:mb-2 sm:mt-2 sm:mb-2">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <input
                        type="checkbox"
                        className="top-1/2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        value={position.title}
                        checked={false}
                        onChange={(e) =>
                          setSelectedPeople(
                            e.target.checked
                              ? [...selectedPeople, position]
                              : selectedPeople.filter((p) => p !== position)
                          )
                        }
                      />
                      <p className="ml-1 font-medium text-indigo-600 truncate">
                        88280213
                      </p>
                      <p className="ml-1 flex-shrink-0 font-normal text-gray-500 text-xs">
                        OSO - HTML
                      </p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <LockClosedIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-300" />
                        <PencilAltIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        <TrashIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 md:mt-2 md:mb-2 sm:mt-2 sm:mb-2">
                  <div className="flex flex-row flex-nowrap gap-3">
                    <div className="text-xs text-right">Text:</div>
                    <div className="text-xs text-right">
                      <p className="px-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Translated
                      </p>
                    </div>
                    <div className="text-xs text-right">96%</div>
                    <div className="text-xs text-right">5,678</div>
                  </div>
                  <div className="flex flex-row flex-nowrap gap-3 mt-1">
                    <div className="text-xs text-right">Files:</div>
                    <div className="text-xs text-right">NA</div>
                  </div>
                </div>
                <div className="lg:w-1/5 md:w-1/3 sm:w-1/3 md:mt-2 md:mb-2 sm:mt-2 sm:mb-2">
                  <div className="flex flex-row flex-nowrap gap-1">
                    <div className="text-xs font-medium text-right">
                      Created:
                    </div>
                    <div className="text-xs text-right">
                      04-29-2022 08:58 AM
                    </div>
                  </div>
                  <div className="text-xs">TransSync</div>
                </div>
                <div className="lg:w-1/5 md:w-1/3 sm:w-1/3 md:mt-2 md:mb-2 sm:mt-2 sm:mb-2">
                  <div className="flex flex-row flex-nowrap gap-1">
                    <div className="text-xs font-medium text-right">
                      Updated:
                    </div>
                    <div className="text-xs text-right">
                      04-29-2022 08:58 AM
                    </div>
                  </div>
                  <div className="text-xs">AP</div>
                </div>
                <div className="lg:w-1/5 md:w-1/3 sm:w-1/3 md:mt-2 md:mb-2 sm:mt-2 sm:mb-2">
                  <div className="flex flex-row flex-nowrap gap-1">
                    <div className="text-xs font-medium text-right">
                      Assigned:
                    </div>
                    <div className="text-xs text-right">
                      04-29-2022 08:58 AM
                    </div>
                  </div>
                  <div className="text-xs">
                    PTS <ArrowSmRightIcon className="h-3 w-3 inline-block" />{" "}
                    <span>edelgado</span>{" "}
                    <ArrowSmRightIcon className="h-3 w-3 inline-block" />{" "}
                    <span>adeberry</span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      top: "-20px",
                      right: "-200px",
                    }}
                  >
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400 cursor-pointer"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-5 px-5"></div>
    </>
  );
}
