/** @jsx h */
import { h, JSX, FunctionalComponent } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperMedium,
} from "../../utils/twind.ts";
// Components
import SectionIntro from "../partials/SectionIntro.tsx";
import Image, { ImageProps } from "../partials/Image.tsx";
import Link from "../partials/Link.tsx";
// typography
import H3 from "../typography/H3.tsx";
import P from "../typography/P.tsx";

interface CardProps {
  image: ImageProps;
  title: string;
  body: string;
  link: {
    href: string;
    text: string;
  };
}

interface CardGridBlockProps {
  title: string;
  body: string;
  cards: Array<CardProps>;
}

const CardGridBlock: FunctionalComponent<CardGridBlockProps> = ({
  title,
  body,
  cards,
}) => {
  const Card: FunctionalComponent<CardProps> = ({
    image,
    title,
    body,
    link,
  }) => {
    return (
      <li class={tw`flex flex-col items-start`}>
        <div class={tw`block w-full pt-[56.25%] relative`}>
          <div
            class={tw`absolute top-0 left-0 right-0 bottom-0 rounded-t-xl overflow-hidden border-b-8 border-brandDarkBlue`}
          >
            <Image {...image} />
          </div>
        </div>
        <H3 text={title} background={"light"} className={tw`mt-5`} />
        <P text={body} background={"light"} className={tw`mt-2`} />
        <Link
          text={link.text}
          href={link.href}
          theme={"secondary"}
          className={tw`mt-5`}
        />
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

export default CardGridBlock;
