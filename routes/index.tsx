/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
// Islands
// Components
import MainWrapper from "../components/wrapper/MainWrapper.tsx";
import HeroBlock from "../components/blocks/Hero.tsx";

export default function Home() {
  // SEO
  const SEO = {
    meta: {
      title: "Homepage",
      description: "I am the description",
    },
    og: {
      title: "Homepage",
      description: "I am the description",
    },
    twitter: {
      title: "Homepage",
      description: "I am the description",
    },
  };

  return (
    <MainWrapper seo={SEO}>
      <HeroBlock
        title={
          <Fragment>
            Repairing appliances in the greater Norwich area since
            <span class={tw`text-brandRed font-extrabold`}> 2006</span>
          </Fragment>
        }
        description={
          "Book your appliance repair online with Anyrep. It takes less than and couldn't be any easier!"
        }
        button={{ text: "Book a repair!", url: "/book" }}
      />
    </MainWrapper>
  );
}
