import React from "react";

function AllTicketsHome() {
  return (
    <div class="flex min-h-screen border-2 border-b-4 border-gray-200 rounded-xl mt-4 mb-4">
      <div class="mx-5 w-11/12">
        <div class=" ">
          <div class="top-section mt-4 flex items-center justify-between border-b border-gray-400 pb-2">
            <h1 class="font-bold">Projects</h1>
            <div class="flex w-28 items-center justify-around rounded border-2 bg-white p-1 font-semibold text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
              </svg>
              <h3>Sort</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div class="middle-hero-section">
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-1">
                  <span class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-1 py-0.2 text-emerald-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p class="whitespace-nowrap text-sm">Closed</p>
                  </span>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-yellow-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-red-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-green-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-yellow-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-green-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-yellow-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-red-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-green-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-green-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="hero-section flex flex-col justify-center border-b-2 py-5">
              <div class="hero-section-content my-1 flex justify-between">
                <div class="flex items-center space-x-2">
                  <p class="h-2 w-2 rounded-full bg-green-500"></p>
                  <h3 class="font-semibold">Workcation</h3>
                </div>
                <div class="flex items-center space-x-2">
                  <h3 class="font-semibold">Visit Site</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="left-side flex items-center space-x-2 text-xs font-semibold text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3>debbielewis/workcation</h3>
                </div>
                <div class="right-side">
                  <ul class="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                    <li class="hidden md:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </li>
                    <li>Laravel</li>
                    <li>Last Deploy 3h ago</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTicketsHome;
