/* This example requires Tailwind CSS v2.0+ */
const items = [
  {
    name: 'agallio',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    title: 'Best Expense Tracker',
    text:
      'I tried many other expense tracker but nothing fits. I found that this app is what I was looking for. Nice and simple UI, also very intuitive. There’s no confusing buttons, or features. It is just a simple expense tracker with budgets that’s just work.',
  },
  {
    name: 'tonyatapple',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    title: 'Open everyday',
    text:
      'Simply amazing. Super fast to enter new entries and the UI is beautiful. This app keeps me accountable for my spending. Excellent work!',
  },
  {
    name: 'michdavidadams',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    title: 'Great app!',
    text:
      'Really easy to use and customizable. The design is very pleasing. And the haptics are nice. 👌🏼 I also like the fact that there’s support for budgets, but it’s not the main focus and you’re not forced to use it.',
  },
  {
    name: 'Monthly7',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    title: 'Convenience and worthy',
    text: `It’s easy to use and get familiar with. I love it for its simple and smooth. All you need to have take your payment note is here, this app.`,
  },
  {
    name: 'Bao-Khanh Ha',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    title: 'Personal data safety.',
    text: `The best thing about this app is that I don't need to worry about personal data breaches, especially when it comes to sensitive information like my financial status (Apple confirmed). Been using it for about a month now. Very easy to navigate. I don't even need to spend time to learn how to use it`,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white text-center">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Helped 130+ users track expenses
        </h2>
        <div className="text-center my-4">What our users say about us:</div>
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-12">
            {items.map((faq) => (
              <div key={faq.text} className="text-left">
                <div className="text-lg leading-6 font-medium text-gray-900">
                  {faq.rating}
                </div>
                <div className="text-lg leading-6 font-medium text-gray-900 my-2">
                  {faq.title}
                </div>
                <div className="mt-2 text-base text-gray-500">{faq.text}</div>
                <div className="mt-2 text-base text-gray-400">
                  – by {faq.name}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
