import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Nav() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navActive = () => {
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", navActive);

  return (
    <nav
      class="relative  flex w-full flex-nowrap items-center justify-between bg-[#6b9080]  text-[#EBEBEB] shadow-sm
       focus:text-[#CAD2C5] dark:bg-neutral-600 sm:flex-wrap sm:justify-start sm:py-4   sticky top-0"
      data-te-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        {/* Collapse button */}
        <button
          class="block border-0 bg-transparent px-2 text-[#EBEBEB] hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 sm:hidden"
          type="button"
          onClick={toggleCollapse}
          data-te-collapse-init
          data-te-target="#navbarSupportedContent8"
          aria-controls="navbarSupportedContent8"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-16 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        {/* nav items */}
        <div
          class={`!visible mt-2 ${
            isCollapsed ? "hidden" : "flex"
          } flex-grow basis-[100%] items-center justify-center sm:mt-0 sm:!flex sm:basis-auto`}
          id="navbarSupportedContent8"
          data-te-collapse-item
        >
          <ul
            class="list-style-none flex flex-col pl-0 sm:mt-0 sm:flex-row"
            data-te-navbar-nav-ref
          >
            {/* <li
              class="my-4 pl-2 sm:my-0 sm:pl-2 sm:pr-1 mx-2 font-bold"
              data-te-nav-item-ref
            >
              <a
                class=" py-2 pl-3 pr-4 text-[#EBEBEB] hover:text-white rounded"
                href="#about"
                data-te-nav-link-ref
              >
                About
              </a>
            </li> */}
            <HashLink
              smooth
              to="/#about"
              className=" my-2 pl-2 sm:my-0 sm:pl-2 sm:pr-1 mx-2 font-bold text-[#EBEBEB] hover:text-white hover:underline hover:decoration-2"
            >
              About
            </HashLink>

            <HashLink
              smooth
              to="/#skills"
              className=" my-2 pl-2 sm:my-0 sm:pl-2 sm:pr-1 mx-2 font-bold text-[#EBEBEB] hover:text-white hover:underline hover:decoration-2"
            >
              Skills
            </HashLink>
            <HashLink
              smooth
              to="/#projects"
              className=" my-2 pl-2 sm:my-0 sm:pl-2 sm:pr-1 mx-2 font-bold text-[#EBEBEB] hover:text-white hover:underline hover:decoration-2"
            >
              Projects
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              className=" my-2 pl-2 sm:my-0 sm:pl-2 sm:pr-1 mx-2 font-bold text-[#EBEBEB] hover:text-white hover:underline hover:decoration-2"
            >
              Contact
            </HashLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
