/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const navigation = [
  { name: 'Blog', href: '/blog' },
  {
    name: 'Terms & Policy',
    href:
      'https://hieudinh.notion.site/Expense-Buddy-Terms-Of-Use-Privacy-Policy-b073198317844a7fa696251ad6d12716',
  },
  {
    name: 'Acknowledgements',
    href:
      'https://hieudinh.notion.site/Expense-Buddy-Acknowledgements-a4f4935b7bbc404fbbf44091f02a812a',
  },
  {
    name: 'Contact',
    href: 'mailto:support@expensebuddy.app',
  },
  { name: 'Twitter', href: 'https://twitter.com/dqhieu' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <header className="sticky top-0 z-10 shadow-md">
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1 items-center space-x-2">
            <a href="/">
              <span className="sr-only">ExpenseBuddy.app</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/assets/logo.png"
                alt="Logo"
              />
            </a>
            <a
              href="/"
              className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-400"
            >
              Expense Buddy
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/expense-buddy-smart-spending/id1568074679"
            >
              <img
                alt="Link to App Store"
                className="w-30 transform transition-all hover:scale-110"
                src="/assets/appstore.svg"
              />
            </a>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/assets/logo.png"
                      alt="Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-4 flex justify-center items-center">
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
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
