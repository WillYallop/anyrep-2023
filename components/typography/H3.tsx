/** @jsx h */
import { h, JSX, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface H3Props {
  text: string | JSX.Element;
  background?: "light" | "dark";
  className?: string;
}

const H3: FunctionalComponent<H3Props> = ({ text, background, className }) => {
  return (
    <h2
      class={tw`${
        background === "dark" ? "text-titleLight" : "text-titleDark"
      } ${className} !md:text-lg text-base leading-tight font-bold`}
    >
      {text}
    </h2>
  );
};

H3.defaultProps = {
  background: "light",
  className: "",
};

export default H3;
