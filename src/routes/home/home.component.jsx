import { useLayoutEffect, useRef, useState } from 'react'
import { CalendarIcon, ChevronRightIcon,
  ArrowSmRightIcon, LockClosedIcon,
   PencilAltIcon, TrashIcon, CheckCircleIcon,
  LoginIcon, LogoutIcon, SearchIcon, UsersIcon, BriefcaseIcon, StarIcon, DocumentTextIcon } from '@heroicons/react/solid'

import Dropdown from '../../components/dropdown.component'

import ActionBar from '../../components/action-bar.component'

import Select from 'react-select';

import { STANDARD_DROPDOWN_STYLES } from '../../contants';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ReactTooltip from 'react-tooltip';

import "./home.styles.css"

const people = [
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  },
  {
    name: 'Enrique Delgado',
    title: 'Software Engineer',
    email: 'edelgado@example.com',
  }

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function Home() {
  const checkbox = useRef()
  const [sideBarExpanded, setSideBarExpanded] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [showMore, setShowMore] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length
    setChecked(selectedPeople.length === people.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople])

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  const handleSideBarExpanded = () => {
      setShowMore(false);
      setSideBarExpanded(!sideBarExpanded);
  }

  const handleShowMore = () => {
    setShowMore(true);
  }

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
        <SearchIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6" onClick={handleSideBarExpanded}/>
        <BriefcaseIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6" onClick={handleSideBarExpanded}/>{/* LSP */}
        <UsersIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6" onClick={handleSideBarExpanded}/>{/* linguist pending workload distribution. Add tooltip  */}
        <StarIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6" onClick={handleSideBarExpanded}/>{/* prefered search */}
        <DocumentTextIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer mt-6" onClick={handleSideBarExpanded}/>{/* New Segment */}
      </div>
    )
  }

  const ExpandedSideBar = () => {
    return (
      <div className="fixed bg-gray-100 min-h-screen flex-col z-50 border-r-2 p-3 w-64 h-full">
        <div className="flex flex-row h-[4%]">
          <div className='basis-[90%]'>
            <div className="border-b border-gray-200">
              <nav className="flex space-x-5">
                <a className="cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 font-medium text-xs border-indigo-500 text-indigo-600">
                  <SearchIcon className="h-5 w-5 text-gray-400"/>
                </a>
                <a className="cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 font-medium text-xs border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  <BriefcaseIcon className="h-5 w-5 text-gray-400"/>
                </a>
                <a className="cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 font-medium text-xs border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  <UsersIcon className="h-5 w-5 text-gray-400"/>
                </a>
                <a className="cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 font-medium text-xs border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  <StarIcon className="h-5 w-5 text-gray-400"/>
                </a>
              </nav>
            </div>
          </div>
          <div className='basis-[10%] pt-1'>
            <LoginIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" onClick={handleSideBarExpanded}/>
          </div>
        </div>

        <div className="mt-3 px-3 overflow-y-auto lg:h-[80%] md:h-[70%] sm:h-[60%]">
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
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />

              <label className="block text-xs font-medium text-gray-700 mt-2 mb-1">
                LSP
              </label>
              <Select
                maxMenuHeight={850}
                styles={STANDARD_DROPDOWN_STYLES}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
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

              { !showMore && <div className="w-full border-t border-gray-300 my-5" /> }

              <label htmlFor="ids" className={`block text-xs font-medium text-gray-700`}>
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
              <label htmlFor="urls" className="block text-xs font-medium text-gray-700 mt-2">
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
                onChange={(date) => setStartDate(date)} />

              { !showMore && <div onClick={handleShowMore} className="cursor-pointer text-xs text-blue-400 mt-6">Show More</div> }
              
              { showMore ? (
                  <>
                    <label className="block text-xs font-medium text-gray-700 mt-2">
                      Queue End Date
                    </label>
                    <DatePicker 
                      selected={startDate}
                      showTimeSelect
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-xs border-gray-300 rounded-md p-2"
                      onChange={(date) => setStartDate(date)} />

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
              ) 
              : null
              }
            </div>
           
        </div>
        <div className="h-[15%] px-3 text-right py-4">
          <button
            type="button"
            className="mr-3 inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Pref Search
          </button>
          <button
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>

      </div>
    )
  }

  return (
    <>
    <div style={{ marginTop: '65px' }}></div>
    <div class="flex">

    { sideBarExpanded ? <ExpandedSideBar /> : <SlimSideBar /> }

    <div class="w-full">
      <div class="mt-1" style={{ marginLeft: sideBarExpanded ? '270px' : '70px' }}>
         <div className="shadow md:px-3 h-14
                            fixed z-10 bg-white border-solid border-b-2
                             border-gray-200 p-2 w-full flex flex-row" style={{ marginTop: '-85px' }}>
              <div className="flex-grow">
                  <span className="text-xs mr-4">1,439 Tasks</span>
                  <Dropdown />
              </div>
              <div className="flex-grow">

              </div>
              <div className="flex-grow">
                  
              </div>
              
        </div>

      <table className="divide-y divide-gray-300 w-full" style={{ marginTop: '86px' }}>
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
              <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900">
                ID
              </th>
              <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900">
                Flags
              </th>
              <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900">
                Text
              </th>
              <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900">
                Words
              </th>
              <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900">
                Files
              </th>
              <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900">
                Created
              </th>
              <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900">
                Updated
              </th>
              <th scope="col" className="px-3 py-1.5 text-left text-xs font-semibold text-gray-900">
                Assigned
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <tr key={person.email} className={selectedPeople.includes(person) ? 'bg-gray-50' : undefined}>
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
                    'whitespace-nowrap py-2 pr-3 text-xs font-medium',
                    selectedPeople.includes(person) ? 'text-indigo-600' : 'text-gray-900'
                  )}
                >
                  <span className="ml-1 font-medium text-indigo-600 truncate">88280213</span>
                  <span className="ml-1 flex-shrink-0 font-normal text-gray-500" style={{ fontSize: '10px' }}>OSO-HTML</span>
                </td>
                <td className="whitespace-nowrap px-3 py1.5 text-xs text-gray-500">
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    <LockClosedIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-red-300" />
                    <PencilAltIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    <TrashIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py1.5 text-xs text-gray-500">
                  <div className="flex flex-row flex-nowrap gap-1">
                      <div className="text-xs">
                          <p className="px-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Translated
                          </p>
                      </div>
                      <div className="text-xs">96%</div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500">
                <div className="text-xs">5,678</div>
                </td>
                <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500">
                  <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" />
                </td>
                <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500">
                  <div className="text-xs">04-29-2022 08:58 AM</div>
                      <span>TransSync</span>   
                </td>
                <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500">
                  <div className="text-xs">04-29-2022 09:15 AM</div>
                  <div className="text-xs">AP</div>
                </td>
                <td className="whitespace-nowrap px-3 py-1.5 text-xs text-gray-500">
                  <div className="text-xs">04-29-2022 08:58 AM</div>
                  <div className="text-xs">
                      <span className="font-semibold bg-sky-100  px-1">PTS</span> <ArrowSmRightIcon className="h-3 w-3 inline-block" /> <span>edelgado</span> <ArrowSmRightIcon className="h-3 w-3 inline-block" /> <span>adeberry</span>
                  </div>
                </td>
                <td>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400 cursor-pointer"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-5"></div>
    </div>
  </div>
</div>
    
    </>
  )
}