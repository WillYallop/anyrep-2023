/** @jsx h */
import { h, JSX, FunctionalComponent } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperMedium,
} from "../../utils/twind.ts";

interface ServiceIntroBlockProps {
  textarea: JSX.Element;
}

const ServiceIntroBlock: FunctionalComponent<ServiceIntroBlockProps> = ({
  textarea,
}) => {
  return (
    <section class={tw`${roundedSectionOuter} pb-0`}>
      <div class={tw`${roundedSectionInner} bg-sectionGrey py-14 lg:py-20`}>
        <div class={tw`${wrapperMedium} flex flex-nowrap items-center`}>
          {/* icon */}
          <div
            class={tw`w-20 h-20 min-w-[80px] hidden md:flex rounded-[50%] bg-brandRed items-center justify-center`}
          >
            <svg
              class={tw`w-8 h-8`}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.81 8.6a1.02 1.02 0 0 0-1.7-.47l-4.82 4.82h-5.23V7.7l4.82-4.82a1.01 1.01 0 0 0-.46-1.7 10.06 10.06 0 0 0-12.28 8.15c-.3 1.59-.2 3.22.32 4.74L2.26 25.29a4.53 4.53 0 0 0 0 6.4 4.31 4.31 0 0 0 3.08 1.4 4.61 4.61 0 0 0 3.2-1.33l11.21-11.21a10.06 10.06 0 0 0 12.93-7.12c.48-1.58.52-3.24.13-4.84ZM5.91 29.55a1.51 1.51 0 1 1 0-3.02 1.51 1.51 0 0 1 0 3.02Z"
                fill="#fff"
              />
            </svg>
          </div>
          {/* textarea */}
          <div class={tw`w-full pl-0 md:pl-10 max-w-4xl`}>{textarea}</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntroBlock;
