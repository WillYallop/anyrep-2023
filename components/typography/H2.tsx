/** @jsx h */
import { h, JSX, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface H2Props {
  text: string | JSX.Element;
  background?: "light" | "dark";
  className?: string;
}

const H2: FunctionalComponent<H2Props> = ({ text, background, className }) => {
  return (
    <h2
      class={tw`${
        background === "dark" ? "text-titleLight" : "text-titleDark"
      } ${className} !md:text-4xl text-2xl leading-tight font-bold`}
    >
      {text}
    </h2>
  );
};

H2.defaultProps = {
  background: "light",
  className: "",
};

export default H2;
