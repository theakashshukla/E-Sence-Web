import { Card } from "@/components/ui/card";
import { pricing } from "@/config/pricing";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="overflow-hidden">
      {/* <div
        aria-hidden="true"
        className="absolute overflow- -top-48 left-0 -z-[1]"
      >
        <div className="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
        <div className="bg-slate-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60"></div>
      </div> */}
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        {/* Grdient Start */}

        {/* Grdient End */}
        {/* Title */}
        <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900 md:leading-[5rem]">
            Simple, transparent pricing for everyone.
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-2 lg:text-lg">
            Whatever your status, our offers evolve according to your needs.
            Monthly Annually
          </p>
        </div>
        {/* End Title */}

        <div className="relative xl:w-10/12 xl:mx-auto">
          {/* Grid */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {" "}
            {pricing.map((price, index) => (
              <Card
                key={index}
                className="shadow-xl  p-5 relative z-10  rounded-xl md:p-10 "
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {price.title}
                </h3>
                <div className="text-sm text-gray-500">
                  {price.description}
                </div>
                <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                  Most popular
                </span>

                <div className="mt-5">
                  <span className="text-6xl font-bold text-gray-800 dark:text-gray-200">
                    ₹{price.price}
                  </span>
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {price.priceDecimals}
                  </span>
                  <span className="ml-3 text-gray-500">{price.currency}</span>
                </div>

                <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                  {/* List */}
                  <ul role="list" className="space-y-2 text-sm sm:text-base">
                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200">
                        Up to 10 people
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200">
                        Collect data
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200">
                        Code extensibility
                      </span>
                    </li>
                  </ul>
                  {/* End List */}

                  {/* List */}
                  <ul role="list" className="space-y-2 text-sm sm:text-base">
                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200">
                        Custom reports
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200">
                        Product support
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200">
                        Activity reporting
                      </span>
                    </li>
                  </ul>
                  {/* End List */}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm text-gray-500">Cancel anytime.</p>
                    <p className="text-sm text-gray-500">No card required.</p>
                  </div>

                  <div className="flex justify-end">
                    {/* add button in the button */}
                    <Button>{price.cta}</Button>
                  </div>
                </div>
              </Card>
            ))}
            {/* End Card */}
          </div>

          {/* End Grid */}

          {/* SVG Element */}
          <div className="hidden md:block absolute top-0 right-0 translate-y-16 translate-x-16">
            <svg
              className="w-16 h-auto text-orange-500"
              width="121"
              height="135"
              viewBox="0 0 121 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"
              />
              <path
                d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"
              />
              <path
                d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {/* End SVG Element */}

          {/* SVG Element */}
          <div className="hidden md:block absolute bottom-0 left-0 translate-y-16 -translate-x-16">
            <svg
              className="w-56 h-auto text-cyan-500"
              width="347"
              height="188"
              viewBox="0 0 347 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                stroke="currentColor"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {/* End SVG Element */}
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mt-7 text-center">
          <p className="text-xs text-gray-400">
            Prices in INR. Taxes may apply.
          </p>
        </div>
      </div>
      {/* End Features */}

      
    </div>
  );
}
