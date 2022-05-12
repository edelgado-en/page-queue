import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'

const stats = [
  { name: 'Total', stat: '71,897', previousStat: '70,946', change: '', changeType: '' },
  { name: 'Past Due', stat: '25,567', previousStat: '56.14%', change: '2.02%', changeType: 'decrease' },
  { name: 'Due Today', stat: '18,000', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
  { name: 'Due Tomorrow', stat: '9,789', previousStat: '28.62%', change: '4.05%', changeType: 'increase' }, 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-3 cursor-pointer hover:bg-gray-100">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <div className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm text-gray-500">tasks</span>
              </div>

              {item.change.length > 0 &&
                <>
                  <div
                    className={classNames(
                      item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                      'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium md:mt-2 lg:mt-0'
                    )}
                  >
                    {item.changeType === 'increase' ? (
                      <ArrowSmUpIcon
                        className="-ml-1 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowSmDownIcon
                        className="-ml-1 mr-0.5 flex-shrink-0 self-center h-4 w-4 text-red-500"
                        aria-hidden="true"
                      />
                    )}

                    <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                    {item.change}
                  </div>
                </>
              }

              
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}