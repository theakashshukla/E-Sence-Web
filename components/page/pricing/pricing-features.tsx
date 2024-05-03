import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { features } from "@/config/pricing";

export default function PricingFeature() {

  return (
    <div className="overflow-hidden">
      {/* Comparison Table */}
      <div className="relative">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Compare plans
            </h2>
          </div>

          {/* Header */}
          <div className="hidden lg:block sticky top-0 left-0 py-2 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
            {/* Grid */}
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-2">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Features
                </span>
              </div>
              {/* End Col */}

              <div className="col-span-1">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Basic
                </span>
                <p className="mt-2 text-sm text-gray-500">Free forever</p>
              </div>
              {/* End Col */}

              <div className="col-span-1">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  ₹3899/m billed annually
                </p>
              </div>
              {/* End Col */}

              <div className="col-span-1">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  ₹9899/m billed annually
                </p>
              </div>
              {/* End Col */}

              <div className="col-span-1">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  ₹16899/m billed annually
                </p>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Header */}

          <div className="space-y-4 lg:space-y-0">
            {features.map((feature, index) => (
              <div key={index}>
                <ul className="mt-6 grid lg:grid-cols-6 lg:gap-6">
                  <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {feature.category}
                    </span>
                  </li>
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}

                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}

                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}

                  {/* Item */}
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  {/* End Item */}
                </ul>

                {feature.details.map((detail, index) => (
                  <ul className="grid lg:grid-cols-6 lg:gap-6" key={index}>
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                      <span className="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                        {detail.title}
                      </span>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                          Basic
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                          {detail.basic ? (
                            <Check className="w-5 h-5 text-blue-500" />
                          ) : (
                            <svg
                              className="w-4 h-4 text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                          Startup
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                          {detail.startup ? (
                            <Check className="w-5 h-5 text-blue-500" />
                          ) : (
                            <svg
                              className="w-4 h-4 text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                          Team
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                          {detail.team ? (
                            <Check className="w-5 h-5 text-blue-500" />
                          ) : (
                            <svg
                              className="w-4 h-4 text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                        <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                          Enterprise
                        </span>
                        <span className="text-sm text-gray-800 dark:text-gray-200">
                          {detail.enterprise ? (
                            <Check className="w-5 h-5 text-blue-500" />
                          ) : (
                            <svg
                              className="w-4 h-4 text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="hidden lg:block mt-6">
            {/* Grid */}
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-2"></div>
              {/* End Col */}

              <div className="col-span-1">
                <Button variant="outline" className="w-full">
                  <a href="#">Get started</a>
                </Button>
              </div>
              {/* End Col */}

              <div className="col-span-1">
                <Button className="w-full">
                  <a href="#">Get started</a>
                </Button>
              </div>
              {/* End Col */}

              <div className="col-span-1">
                <Button variant="outline" className="w-full">
                  <a href="#">Get started</a>
                </Button>
              </div>
              {/* End Col */}

              <div className="col-span-1">
                <Button variant="outline" className="w-full">
                  <a href="#">Get started</a>
                </Button>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Footer */}

          {/* Button Group */}
          <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need a custom plan?
            </p>
            <Button variant="outline">Contact us</Button>
          </div>
          {/* End Button Group */}
        </div>
      </div>
      {/* End Comparison Table */}
    </div>
  );
}
