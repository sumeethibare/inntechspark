// Services.tsx

import { DevicePhoneMobileIcon, AdjustmentsHorizontalIcon, BookOpenIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const Services: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-6 py-10 sm:px-6 lg:px-14 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
        
        <div>
          <DevicePhoneMobileIcon className="shrink-0 w-9 h-9 text-gray-800" />
          <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
            <div className="bg-gray-400 w-9 h-0.5"></div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-black">Responsive</h3>
            <p className="mt-1 text-gray-600">Responsive, and mobile-first project on the web</p>
          </div>
        </div>

        <div>
          <AdjustmentsHorizontalIcon className="shrink-0 w-9 h-9 text-gray-800" />
          <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
            <div className="bg-gray-400 w-9 h-0.5"></div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-black">Customizable</h3>
            <p className="mt-1 text-gray-600">Components are easily customized and extendable</p>
          </div>
        </div>

        <div>
          <BookOpenIcon className="shrink-0 w-9 h-9 text-gray-800" />
          <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
            <div className="bg-gray-400 w-9 h-0.5"></div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-black">Documentation</h3>
            <p className="mt-1 text-gray-600">Every component and plugin is well documented</p>
          </div>
        </div>

        <div>
          <ChatBubbleLeftRightIcon className="shrink-0 w-9 h-9 text-gray-800" />
          <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
            <div className="bg-gray-400 w-9 h-0.5"></div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-black">24/7 Support</h3>
            <p className="mt-1 text-gray-600">Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
