/** @jsx h */
import { h, JSX, FunctionalComponent } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperMedium,
} from "../../utils/twind.ts";

interface IntroProps {
  title: JSX.Element;
  textarea: JSX.Element;
}

const IntroBlock: FunctionalComponent<IntroProps> = ({ title, textarea }) => {
  return (
    <section class={tw`${roundedSectionOuter} pb-0`}>
      <div class={tw`${roundedSectionInner} bg-sectionGrey py-20`}>
        <div
          class={tw`${wrapperMedium} flex items-start flex-wrap md:flex-nowrap`}
        >
          {/* title */}
          <div class={tw`w-full !md:w-1/3`}>
            <div class={tw`max-w-sm`}>{title}</div>
          </div>
          {/* textarea */}
          <div class={tw`w-full !md:w-2/3 md:pl-20 pt-6 md:pt-0`}>
            {textarea}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroBlock;
