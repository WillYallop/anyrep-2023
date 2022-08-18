/** @jsx h */
import { h, FunctionalComponent, JSX } from "preact";
import { tw } from "@twind";
import { css } from "twind/css";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperLarge,
} from "../../utils/twind.ts";
// components
import H1 from "../typography/H1.tsx";
import Subtitle from "../typography/Subtitle.tsx";
import Link from "../partials/Link.tsx";
// Islands
import MiniBookForm from "../../islands/MiniBookForm.tsx";

interface HeroBlockProps {
  title: JSX.Element;
  description: string;
}

const HeroBlock: FunctionalComponent<HeroBlockProps> = ({
  title,
  description,
}) => {
  return (
    <section class={tw`${roundedSectionOuter}`}>
      <div class={tw`${roundedSectionInner} bg-brandDarkBlue relative`}>
        <div
          class={tw`${wrapperLarge} flex flex-wrap lg:flex-nowrap items-center pt-20 lg:py-20`}
        >
          {/* textarea */}
          <div
            class={tw`flex flex-col items-start w-full lg:w-1/2 lg:pr-10 px-2 md:px-0 z-10 relative`}
          >
            <H1 text={title} background={"dark"} className={"max-w-[550px]"} />
            <Subtitle
              text={description}
              background={"dark"}
              className={tw`max-w-xl mt-7`}
            />

            <a
              href={"https://uk.trustpilot.com/review/anyrep.co.uk"}
              target={"_blank"}
              class={tw`bg-white border border-brandDarkBlue mt-10 hover:bg-whiteHover text-center  duration-300 text-base font-medium transition-colors flex items-center rounded-xl px-7 h-11`}
            >
              <svg
                viewBox="0 0 799.9 761"
                xmlns="http://www.w3.org/2000/svg"
                class={tw`w-6 h-6 mr-2`}
              >
                <path
                  d="M799.9 290.8H494.4L400.1 0l-94.7 290.8L0 290.5l247.4 180L152.7 761l247.4-179.6L647 761l-94.3-290.5z"
                  fill="#00b67a"
                />
                <path d="m574 536.2-21.2-65.7-152.7 110.9z" fill="#005128" />
              </svg>
              Leave us a review
            </a>
          </div>
          {/* form */}
          <div class={tw`w-full mt-20 -mb-5 lg:mt-0 lg:w-1/2 z-10 relative`}>
            <div
              class={tw`bg-white rounded-2xl  border-8 border-brandDarkBlue p-5`}
            >
              <MiniBookForm />
            </div>
          </div>

          {/* bg  */}
          <span
            class={tw`absolute top-0 left-0 right-0 bottom-0 rounded-2xl overflow-hidden`}
          >
            <span
              class={tw`absolute block right-0 bottom-0 lg:top-10 bg-brandRed w-[50%] top-auto h-[400px] lg:h-auto !lg:w-[55%] z-0 ${css(
                {
                  clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                }
              )}`}
            ></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
