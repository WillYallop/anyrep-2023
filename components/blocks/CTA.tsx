/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperMedium,
} from "../../utils/twind.ts";
// components
import Link from "../partials/Link.tsx";
// Typography
import H2 from "../../components/typography/H2.tsx";
import P from "../../components/typography/P.tsx";

const CTABlock: FunctionalComponent = () => {
  return (
    <section class={tw`${roundedSectionOuter}`}>
      <div class={tw`${roundedSectionInner} bg-brandDarkBlue py-20`}>
        <div
          class={tw`${wrapperMedium} flex flex-col items-center text-center max-w-[550px] mx-auto`}
        >
          <H2 background={"dark"} text={`Book a repair`} className={tw`mb-6`} />
          <P
            background={"dark"}
            text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
            amet bibendum tortor. Aenean vitae dui tortor.`}
          />
          <Link
            text={"Book a repair!"}
            href={"/book"}
            theme={"white"}
            className={tw` mt-8`}
          />
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
