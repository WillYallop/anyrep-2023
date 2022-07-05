/** @jsx h */
import { h, JSX, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface H1Props {
  text: string | JSX.Element;
  background?: "light" | "dark";
  className?: string;
}

const H1: FunctionalComponent<H1Props> = ({ text, background, className }) => {
  return (
    <h1
      class={tw`${
        background === "dark" ? "text-titleLight" : "text-titleDark"
      } ${className} text-4xl md:text-5xl leading-tight max-w-xl font-bold`}
    >
      {text}
    </h1>
  );
};

H1.defaultProps = {
  background: "light",
  className: "",
};

export default H1;
