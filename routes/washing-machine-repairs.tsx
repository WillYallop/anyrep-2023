/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";
// Islands
// Components
import MainWrapper from "../components/wrapper/MainWrapper.tsx";
import SimpleHeroBlock from "../components/blocks/SimpleHero.tsx";
import MapBlock from "../components/blocks/Map.tsx";
import AccordionBlock from "../components/blocks/Accordion.tsx";
import CTABlock from "../components/blocks/CTA.tsx";
import Footer from "../components/blocks/Footer.tsx";
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
      <SimpleHeroBlock
        title={<Fragment>Washing Machine Repairs</Fragment>}
        description={
          "If you have a faulty washing machine, dont hesitate to contact Anyrep today and get it fixed!"
        }
        button={{ text: "Book a repair!", url: "/book" }}
      ></SimpleHeroBlock>

      <MapBlock
        title={"Where are we located?"}
        body={"Anyrep is a family run business operating from Norwich."}
      ></MapBlock>
      <AccordionBlock
        accordions={[
          {
            id: 1,
            title: "What area do you cover?",
            body: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. Morbi aliquet leo ut quam luctus venenatis",
            ],
          },
          {
            id: 2,
            title: "What area do you cover?",
            body: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. Morbi aliquet leo ut quam luctus venenatis",
            ],
          },
          {
            id: 3,
            title: "What area do you cover?",
            body: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. Morbi aliquet leo ut quam luctus venenatis",
            ],
          },
        ]}
      ></AccordionBlock>
      <CTABlock />
      <Footer />
    </MainWrapper>
  );
}
