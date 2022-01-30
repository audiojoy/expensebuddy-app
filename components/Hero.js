/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid';

export default function Hero() {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-6 overflow-hidden sm:pt-8 lg:relative lg:py-32">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mt-20">
              {/*
              <div>
                <a href="#" className="inline-flex space-x-4">
                  <span className="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                    What's new
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-indigo-600 space-x-1">
                    <span>Just shipped version 0.1.0</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
              */}
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Keep track of your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600">
                    expenses
                  </span>
                  <br />
                  make{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-pink-600">
                    budgets
                  </span>
                  , and save{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">
                    money
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Expense Buddy is one of the most elegant expense and budget
                  trackers available. This buddy is here to assist you with an
                  interactive, personalized chart that shows all history and
                  one-touch expense logging. All of which makes your expenses
                  tracking and budgeting effortless than ever.
                </p>
              </div>
              <div className="mt-4">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/expense-buddy-smart-spending/id1568074679"
                >
                  <img
                    alt="Link to App Store"
                    className="w-40 transform transition-all hover:scale-110"
                    src="/assets/appstore.svg"
                  />
                </a>
              </div>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex-shrink-0 flex pr-5">
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">
                      Rated 5 stars
                    </span>{' '}
                    by over{' '}
                    <span className="font-medium text-indigo-600">
                      130+ users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-8 sm:relative sm:mt-12 sm:py-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full lg:h-full lg:w-auto lg:max-w-none"
                src="/assets/hero1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
