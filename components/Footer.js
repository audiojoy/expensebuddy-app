/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  main: [
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
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          Made with ❤️ and ☕️ by Dinh Quang Hieu 🐈
        </p>
        <p className="mt-8 text-center text-base text-gray-400">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
