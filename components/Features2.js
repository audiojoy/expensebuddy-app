import {
  ViewGridAddIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  ColorSwatchIcon,
  SwitchVerticalIcon,
  MoonIcon,
  LockClosedIcon,
  HandIcon,
  RefreshIcon,
  CurrencyDollarIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Powerful Widgets',
    text: 'Your spending habit at a glance right on your home screen',
    icon: ViewGridAddIcon,
  },
  {
    name: 'Dark Mode',
    text: 'Whether it is day or night, dark mode is always there for you',
    icon: MoonIcon,
  },
  {
    name: 'Privacy',
    text: 'Your data is always yours, never be collected',
    icon: LockClosedIcon,
  },
  {
    name: 'Gesture Navigation',
    text: 'Comfortably and effortlessly navigate through the app',
    icon: HandIcon,
  },
  {
    name: 'Any currency',
    text: 'No matter where you live, we support your currency',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Import & Export',
    text: 'Easily transfer your data to new devices',
    icon: SwitchVerticalIcon,
  },
  {
    name: 'App icons',
    text: 'Personalize your app with a coat of paint for app icons',
    icon: ColorSwatchIcon,
  },
  {
    name: 'Minimalism theme',
    text: 'Explore the simplicity and cleanliness look',
    icon: DeviceMobileIcon,
  },
  {
    name: 'Customization',
    text: 'Customize your experience with your habit',
    icon: AdjustmentsIcon,
  },
];

export default function Features2() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {/*
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Deploy faster
        </h2>
        */}
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Designed and built for iOS
        </p>
        {/*
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gradient-to-br  from-green-500  to-blue-500 rounded-lg px-6 pb-8  h-48">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-medium text-white tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-white">{feature.text}</p>
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
