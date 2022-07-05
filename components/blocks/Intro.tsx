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
    <section class={tw`${roundedSectionOuter}`}>
      <div class={tw`${roundedSectionInner} bg-sectionGrey py-20`}>
        <div
          class={tw`${wrapperMedium} flex items-start flex-wrap md:flex-nowrap`}
        >
          {/* title */}
          <div class={tw`w-full !md:w-1/3`}>{title}</div>
          {/* textarea */}
          <div class={tw`w-full !md:w-2/3 md:pl-10 pt-6`}>{textarea}</div>
        </div>
      </div>
    </section>
  );
};

export default IntroBlock;
