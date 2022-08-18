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
            text={`Let Anyrep help get your appliance back up and running like new. Call us, or send us a booking enquiry - it takes less than a minute!`}
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
