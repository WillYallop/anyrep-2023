/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";
import { wrapperLarge } from "../../utils/twind.ts";

const TopBar: FunctionalComponent = () => {
  return (
    <div class={tw`w-full border-b border-brandDarkBlue border-opacity-20 h-8`}>
      <div class={tw`${wrapperLarge} h-full`}>
        <ul class={tw`h-full flex items-center justify-between`}>
          <li>
            <a
              href="https://www.facebook.com/anyrep/"
              title={"Vist our Facebook"}
              class={tw`items-center hover:underline hover:text-brandRed transition-colors duration-300  hidden md:flex`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class={tw`h-3 mr-2`}
              >
                <path
                  fill={"#001524"}
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                />
              </svg>
              Facebook
            </a>
          </li>
          <li class={tw`flex`}>
            <a
              href="tel:07525150999"
              class={tw`pl-4  items-center hover:underline hover:text-brandRed transition-colors duration-300 flex`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class={tw`h-3 mr-2`}
              >
                <path
                  fill={"#001524"}
                  d="m511.2 387-23.25 100.8a31.08 31.08 0 0 1-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.97-27.2 24.22-30.45L125.02.8a31.38 31.38 0 0 1 35.78 18.12l46.52 108.5a31.3 31.3 0 0 1-8.98 36.45L144.5 207.1A349.66 349.66 0 0 0 304 366.6l44.08-53.8a31.1 31.1 0 0 1 36.47-8.97l108.5 46.5C506.1 357.2 514.6 372.4 511.2 387z"
                />
              </svg>
              07525 150999
            </a>
            <a
              href="mailto:anyrep@gmail.com"
              class={tw`pl-4  items-center hover:underline hover:text-brandRed transition-colors duration-300 hidden sm:flex`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class={tw`h-3 mr-2`}
              >
                <path
                  fill={"#001524"}
                  d="M464 64a48 48 0 0 1 28.8 86.4L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4A48 48 0 0 1 48 64h416zM217.6 339.2a63.9 63.9 0 0 0 76.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V176l217.6 163.2z"
                />
              </svg>
              anyrep@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
