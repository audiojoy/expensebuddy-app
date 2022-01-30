export default function CTA() {
  return (
    <div className=" bg-gradient-to-br from-pink-400 to-blue-600">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Let's start saving now</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white">No setup needed</p>
        <div className="mt-8 flex justify-center">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/expense-buddy-smart-spending/id1568074679"
          >
            <img
              alt="Link to App Store"
              className="w-60 transform transition-all hover:scale-110"
              src="/assets/appstore.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
