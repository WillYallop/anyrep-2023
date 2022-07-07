/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";
// Typography
// Typography
import H2 from "../typography/H2.tsx";
import P from "../typography/P.tsx";

interface SectionIntroProps {
  title: string;
  body: string;
}

const SectionIntro: FunctionalComponent<SectionIntroProps> = ({
  title,
  body,
}) => {
  return (
    <div class={tw`w-full max-w-sm`}>
      <H2 text={title} background={"light"} className={tw``} />
      <P
        text={body}
        background={"light"}
        className={tw` !md:text-xl md:mt-5 mt-2`}
      />
      <span
        class={tw`md:w-20 md:h-3 w-14 h-2 block bg-brandRed md:mt-7 mt-5`}
      ></span>
    </div>
  );
};

export default SectionIntro;
