/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface LinkProps {
  text: string;
  href: string;
  theme: "primary" | "secondary" | "white";
  className?: string;
}

const Link: FunctionalComponent<LinkProps> = ({
  text,
  href,
  theme,
  className,
}) => {
  let themeStyles;
  if (theme === "primary") {
    themeStyles = tw``;
  } else if (theme === "secondary") {
    themeStyles = tw`bg-white border border-brandDarkBlue hover:bg-brandDarkBlue hover:text-white`;
  } else if (theme === "white") {
    themeStyles = tw`bg-white hover:bg-whiteHover text-titleDark`;
  }

  return (
    <a
      href={href}
      class={tw`${themeStyles} ${className} text-center duration-300 text-base font-medium transition-colors flex items-center rounded-xl px-7 h-11`}
    >
      {text}
    </a>
  );
};

Link.defaultProps = {
  theme: "primary",
  className: "",
};

export default Link;
