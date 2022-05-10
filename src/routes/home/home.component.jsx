import { useLayoutEffect, useRef, useState } from 'react'
import { CalendarIcon, ChevronRightIcon,
  ArrowSmRightIcon, LockClosedIcon,
   PencilAltIcon, TrashIcon, CheckCircleIcon } from '@heroicons/react/solid'

import ActionBar from '../../components/action-bar.component'

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

export default function Home() {
  const checkbox = useRef()
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

  return (
    <>
    <div style={{ marginTop: '65px' }}></div>
    <ActionBar />
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              
              <table className="min-w-full table-fixed divide-y divide-gray-300">
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
                          <CalendarIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" aria-hidden="true" />
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
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}