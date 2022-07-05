/** @jsx h */
import { h, JSX, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface PProps {
  text: string | JSX.Element;
  background?: "light" | "dark";
  className?: string;
}

const P: FunctionalComponent<PProps> = ({ text, background, className }) => {
  return (
    <p
      class={tw`${
        background === "dark" ? "text-titleLight" : "text-titleDark"
      } ${className} !md:text-lg text-base leading-tight font-normal`}
    >
      {text}
    </p>
  );
};

P.defaultProps = {
  background: "light",
  className: "",
};

export default P;
