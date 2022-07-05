/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
// Islands
// Components
import MainWrapper from "../components/wrapper/MainWrapper.tsx";
import HeroBlock from "../components/blocks/Hero.tsx";
import IntroBlock from "../components/blocks/Intro.tsx";
// Typography
import H2 from "../components/typography/H2.tsx";
import P from "../components/typography/P.tsx";

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
      <IntroBlock
        title={
          <H2
            text={
              <Fragment>
                <span class={tw`text-brandRed`}>Why</span>
                <br />
                Choose Anyrep?
              </Fragment>
            }
            background={"light"}
          />
        }
        textarea={
          <Fragment>
            <P
              background={"light"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. Morbi aliquet leo ut quam luctus venenatis. Integer aliquam nisl ac ipsum feugiat iaculis. Donec metus ex, dictum vitae magna et, aliquet imperdiet lacus. Morbi non neque lacinia, faucibus tellus ac, commodo nunc. Aliquam ultrices sed dolor nec congue."
              }
            />
          </Fragment>
        }
      />
    </MainWrapper>
  );
}
