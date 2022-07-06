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
      <P text={body} background={"light"} className={tw` !md:text-xl mt-5`} />
      <span class={tw`w-20 h-3 block bg-brandRed mt-7`}></span>
    </div>
  );
};

export default SectionIntro;
