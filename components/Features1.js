/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Informative chart',
    text: 'All your spending history in one place, easy for browsing',
    icon: 'feature1.png',
  },
  {
    name: 'Easy budgeting',
    text: 'Easily keep track of your budgets, never overspend a single penny',
    icon: 'feature2.png',
  },
  {
    name: 'Home widgets',
    text: 'Your spending habit at a glance right on your home screen',
    icon: 'feature3.png',
  },
];

export default function Features1() {
  return (
    <div className="relative bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {/*
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Deploy faster
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        */}
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 py-6">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center">
                        <img src={`/assets/features/${feature.icon}`} />
                      </span>
                    </div>
                    <h3 className="mt-2 text-2xl font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
