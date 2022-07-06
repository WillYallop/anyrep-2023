/** @jsx h */
import { h, JSX, FunctionalComponent } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperMedium,
} from "../../utils/twind.ts";
// COmponents
import SectionIntro from "../partials/SectionIntro.tsx";

interface CardGridBlockProps {
  title: string;
  body: string;
}

const CardGridBlock: FunctionalComponent<CardGridBlockProps> = ({
  title,
  body,
}) => {
  return (
    <section class={tw`${roundedSectionOuter}`}>
      <div class={tw`${roundedSectionInner} py-20`}>
        <div
          class={tw`${wrapperMedium} flex items-start flex-wrap md:flex-nowrap`}
        >
          {/* title */}
          <div class={tw`w-full !md:w-1/3`}>
            <SectionIntro title={title} body={body} />
          </div>
          {/* grid */}
          <div class={tw`w-full !md:w-2/3 md:pl-10 pt-6 md:pt-0`}>
            <p>GRID</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGridBlock;
