/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import { tw } from "@twind";
import { wrapperLarge } from "../utils/twind.ts";
// Components
import Logo from "../components/partials/Logo.tsx";
import Link from "../components/partials/Link.tsx";

interface NavItems {
  title: string;
  href?: string;
  children: Array<{
    title: string;
    href: string;
  }>;
}

const Header: FunctionalComponent = () => {
  const [navState, setNavState] = useState(false);
  const [dropdownState, setDropdownState] = useState(false);

  // Nav Items
  const navItems: Array<NavItems> = [
    {
      title: "Our Services",
      href: undefined,
      children: [
        {
          title: "Washing Machine Repairs",
          href: "/washing-machine-repairs",
        },
        {
          title: "Fridge & Freezer Repairs",
          href: "/fridge-and-freezer-repairs",
        },
        {
          title: "Dishwasher Repairs",
          href: "/dishwasher-repairs",
        },
        {
          title: "Tumble Dryer Repairs",
          href: "/tumble-dryer-repairs",
        },
        {
          title: "Oven Repairs",
          href: "/oven-repairs",
        },
        {
          title: "Hob Repairs",
          href: "/hob-repairs",
        },
        {
          title: "Commercial Appliance Repairs",
          href: "/commercial-appliance-repairs",
        },
        {
          title: "Extractor Hood Repairs",
          href: "/extractor-hood-repairs",
        },
        {
          title: "Hoover Repairs",
          href: "/hoover-repairs",
        },
        {
          title: "Microwave Repairs",
          href: "/microwave-repairs",
        },
      ],
    },
    {
      title: "Contact us",
      href: "/contact-us",
      children: [],
    },
  ];

  // only works with one dropdown on per header component - move to unique component if multiple are needed
  const dropdown = (children: NavItems["children"]) => {
    if (children.length) {
      return (
        <ul
          role="menu"
          aria-label="Services"
          class={tw`${
            dropdownState
              ? "lg:opacity-100 lg:translate-y-4 lg:pointer-events-auto"
              : "lg:opacity-0 lg:translate-y-0 lg:pointer-events-none"
          } transition-all mt-5 z-30 lg:mt-0 duration-300 lg:absolute lg:top-full bg-white lg:border lg:border-brandDarkBlue lg:border-opacity-20  lg:rounded-2xl lg:p-4 w-full lg:w-[300px]`}
        >
          {children.map((item) => {
            return (
              <li
                class={tw` text-base border-t text-brandDarkBlue border-brandDarkBlue border-opacity-10 py-2 first:border-t-0 last:border-b lg:last:border-b-0 first:pt-0 lg:last:pb-0`}
              >
                <a
                  href={item.href}
                  role="menuitem"
                  class={tw`hover:text-brandRed`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      );
    } else return null;
  };

  useEffect(() => {
    const navItemEle = document.getElementById("dropdown-nav-li");
    if (navItemEle) {
      document.addEventListener("click", (event) => {
        // @ts-ignore <cba>
        const isClickInside = navItemEle.contains(event.target);
        if (!isClickInside) {
          setDropdownState(false);
        }
      });
    }
  }, []);

  return (
    <header class={tw`w-full h-20`}>
      <div class={tw`${wrapperLarge} h-full flex items-center justify-between`}>
        <Logo />
        <div class={tw`flex ${navState ? "fixed top-4 right-5" : ""} z-50`}>
          <a
            class={tw` lg:hidden h-12 w-12 flex items-center justify-center bg-brandGrey rounded-1/2 mr-3`}
            href="tel:07525150999"
            aria-label={"Call Anyrep on 07525 150999"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class={tw`h-4 `}
            >
              <path
                fill={"#001524"}
                d="m511.2 387-23.25 100.8a31.08 31.08 0 0 1-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.97-27.2 24.22-30.45L125.02.8a31.38 31.38 0 0 1 35.78 18.12l46.52 108.5a31.3 31.3 0 0 1-8.98 36.45L144.5 207.1A349.66 349.66 0 0 0 304 366.6l44.08-53.8a31.1 31.1 0 0 1 36.47-8.97l108.5 46.5C506.1 357.2 514.6 372.4 511.2 387z"
              />
            </svg>
          </a>
          <button
            aria-expanded={navState}
            aria-label={"Mobile Navigation Button"}
            class={tw` lg:hidden h-12 w-12 flex items-center justify-center bg-brandGrey rounded-1/2`}
            onClick={() => setNavState(!navState)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class={tw`text-brandDarkBlue h-6`}
            >
              <path
                fill={"#001524"}
                d="M0 96a32 32 0 0 1 32-32h384c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm0 160c0-17.7 14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm416 192H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
          </button>
        </div>

        <nav
          role="navigation"
          class={tw`${
            navState ? "right-0" : "-right-full"
          } transition-all overflow-y-auto lg:overflow-y-visible duration-300 fixed top-0 bottom-0 left-auto w-full px-5 lg:px-0 bg-white lg:relative lg:right-auto lg:top-auto lg:bottom-auto z-40  lg:justify-end`}
        >
          <div
            class={tw`h-full flex items-center justify-start lg:justify-end `}
          >
            <ul
              role="menubar"
              class={tw`flex lg:justify-end flex-col lg:flex-row items-start lg:items-center w-full lg:mr-0 m-auto py-10 lg:py-0 lg:w-auto `}
            >
              {navItems.map((item) => {
                // Has children
                if (item.children.length) {
                  return (
                    <li
                      id="dropdown-nav-li"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={dropdownState}
                      aria-label={`${item.title} Navigation Button`}
                      onClick={() => setDropdownState(!dropdownState)}
                      class={tw`px-3 py-2 lg:py-0 font-medium text-2xl w-full lg:w-auto lg:text-base flex justify-center flex-col relative hover:text-brandRed ${
                        dropdownState ? "text-brandRed" : ""
                      }`}
                    >
                      {item.title} {dropdown(item.children)}
                    </li>
                  );
                }
                // Doesnt
                else {
                  return (
                    <li
                      class={tw`px-3 py-2 lg:py-0 w-full lg:w-auto flex items-center`}
                    >
                      <a
                        href={item.href}
                        role="menuitem"
                        class={tw`hover:text-brandRed transition-colors duration-300 text-2xl lg:text-base font-medium`}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                }
              })}
              <li class={tw`pl-3 mt-9 lg:mt-0`}>
                <Link
                  text={"Book a repair!"}
                  href={"/book"}
                  theme={"secondary"}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
