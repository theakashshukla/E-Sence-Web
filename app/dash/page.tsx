"use client";
import React, { useState } from "react";

const subMenuItems = [
  {
    id: "dashboard",
    icons: (
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Dashboard",
  },
  {
    id: "user",
    icons: (
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Users",
    links: ["Link 1", "Link 2", "Link 3"],
  },
  {
    id: "account",
    icons: (
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="15" r="3" />
        <circle cx="9" cy="7" r="4" />
        <path d="M10 15H6a4 4 0 0 0-4 4v2" />
        <path d="m21.7 16.4-.9-.3" />
        <path d="m15.2 13.9-.9-.3" />
        <path d="m16.6 18.7.3-.9" />
        <path d="m19.1 12.2.3-.9" />
        <path d="m19.6 18.7-.4-1" />
        <path d="m16.8 12.3-.4-1" />
        <path d="m14.3 16.6 1-.4" />
        <path d="m20.7 13.8 1-.4" />
      </svg>
    ),
    title: "Account",
    links: ["Link 4", "Link 5", "Link 6"],
  },
  {
    id: "project",
    icons: (
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
        <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
        <path d="M15 2v5h5" />
      </svg>
    ),
    title: "Projects",
    links: ["Link 4", "Link 5", "Link 6"],
  },
  {
    id: "calender",
    icons: (
      <svg
        className="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    ),
    title: "Calender",
  },
];

export default function Dash() {
  const [openSubMenu, setOpenSubMenu] = useState(
    Array(subMenuItems.length).fill(false)
  );

  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemId: any) => {
    setActiveItem(itemId);
  };
  const toggleSubMenu = (index: number) => {
    const newOpenSubMenu = [...openSubMenu];
    newOpenSubMenu[index] = !newOpenSubMenu[index];
    setOpenSubMenu(newOpenSubMenu);
  };

  return (
    <div>
      {/* Sidebar button */}
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600"
        onClick={() => setOpenSubMenu(Array(subMenuItems.length).fill(false))}
      >
        <span className="sr-only">Toggle Navigation</span>
        {/* Your button content */}
      </button>

      {/* Sidebar content */}
      <div
        id="docs-sidebar"
        className={`hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700`}
      >
        {/* Sidebar header */}
        <div className="px-6">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>

        {/* Sidebar navigation */}
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            {/* Sidebar items */}

            {/* Submenu items */}
            {subMenuItems.map((submenu, index) => (
              <li key={submenu.id} className="hs-accordion">
                {/* Submenu button */}
                <button
                  type="button"
                  className={`hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white ${
                    activeItem === submenu.id && "bg-gray-200"
                  }`}
                  onClick={() => {
                    handleItemClick(submenu.id);
                    toggleSubMenu(index);
                  }}
                >
                  {submenu.icons}
                  {/* Submenu title */}
                  {submenu.title}
                  {/* Submenu icon */}
                  {submenu?.links && submenu?.links?.length > 0 && (
                    <>
                      <svg
                        className={`hs-accordion-active:block ms-auto ${
                          openSubMenu[index] ? "hidden" : "block"
                        } size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      <svg
                        className={`hs-accordion-active:hidden ms-auto ${
                          openSubMenu[index] ? "block" : "hidden"
                        } size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Submenu content */}
                <div
                  id={submenu.id}
                  className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                    openSubMenu[index] ? "block" : "hidden"
                  }`}
                >
                  <ul className="pt-2 ps-2">
                    {/* Submenu links */}
                    {submenu?.links?.map((link, index) => (
                      <li key={index}>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                          href="#"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}