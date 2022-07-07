/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperMedium,
  sectionWrapperSmall,
} from "../../utils/twind.ts";
// islands
import AccordionRow, {
  AccordionRowProps,
} from "../../islands/AccordionRow.tsx";

interface AccordionBlockProps {
  accordions: Array<AccordionRowProps>;
}

const AccordionBlock: FunctionalComponent<AccordionBlockProps> = ({
  accordions,
}) => {
  return (
    <section class={tw`${roundedSectionOuter}`}>
      <div class={tw`${roundedSectionInner} py-20`}>
        <div class={tw`${wrapperMedium}`}>
          {/* grid */}
          <ul class={tw`${sectionWrapperSmall} w-full`}>
            {accordions.map((accordion, index) => {
              return <AccordionRow key={index} {...accordion} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

AccordionBlock.defaultProps = {
  accordions: [],
};

export default AccordionBlock;
