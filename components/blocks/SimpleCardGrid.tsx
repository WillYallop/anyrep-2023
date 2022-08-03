/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperMedium,
} from "../../utils/twind.ts";
// Components
import SectionIntro from "../partials/SectionIntro.tsx";
// typography
import H3 from "../typography/H3.tsx";
import P from "../typography/P.tsx";

interface CardProps {
  title: string;
  body: string;
}

interface SimpleCardGridBlockProps {
  title: string;
  body: string;
  cards: Array<CardProps>;
}

const SimpleCardGridBlock: FunctionalComponent<SimpleCardGridBlockProps> = ({
  title,
  body,
  cards,
}) => {
  const Card: FunctionalComponent<CardProps> = ({ title, body }) => {
    return (
      <li
        class={tw`flex flex-col items-start border-t-[6px] border-brandDarkBlue`}
      >
        <H3 text={title} background={"light"} className={tw`mt-5`} />
        <P text={body} background={"light"} className={tw`mt-2`} />
      </li>
    );
  };

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
          <ul
            class={tw`w-full !md:w-2/3 md:pl-20 pt-12 md:pt-0 grid grid-cols-1 sm:grid-cols-2 gap-9`}
          >
            {cards.map((card) => {
              return <Card {...card} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SimpleCardGridBlock;
