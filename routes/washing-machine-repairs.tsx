/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";
// Islands
// Components
import MainWrapper from "../components/wrapper/MainWrapper.tsx";
import SimpleHeroBlock from "../components/blocks/SimpleHero.tsx";
import MapBlock from "../components/blocks/Map.tsx";
import SimpleCardGridBlock from "../components/blocks/SimpleCardGrid.tsx";
import AccordionBlock from "../components/blocks/Accordion.tsx";
import CTABlock from "../components/blocks/CTA.tsx";
import ServiceIntroBlock from "../components/blocks/ServiceIntro.tsx";
import Footer from "../components/blocks/Footer.tsx";
// Typography
import H2 from "../components/typography/H2.tsx";
import P from "../components/typography/P.tsx";

export default function WashingMachineRepairs() {
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
        image={{
          formats: [
            {
              url: asset("/images/washingMachines/card.avif"),
              mime: "image/avif",
            },
            {
              url: asset("/images/washingMachines/card.webp"),
              mime: "image/webp",
            },
            {
              url: asset("/images/washingMachines/card.jpg"),
              mime: "image/jpg",
            },
          ],
          alt: "A man using a washing machine.",
          src: asset("/images/washingMachines/card.jpg"),
          loading: "eager",
        }}
        button={{ text: "Book a repair!", url: "/book" }}
      ></SimpleHeroBlock>
      <ServiceIntroBlock
        textarea={
          <Fragment>
            <P
              background={"light"}
              text={
                "When your cooker breaks down, the impact is drastic and so we ensure Anyrep will do all it can to get your cooker up and running like new. Most repairs are completed on the first visit and on the same day where possible."
              }
              className={tw`lg:!text-xl`}
            />
          </Fragment>
        }
      ></ServiceIntroBlock>
      <SimpleCardGridBlock
        title={"Common Faults"}
        body={
          "These are some common faults with Ovens that we see at Anyrep often."
        }
        cards={[
          {
            title: "Broken Elements",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
          {
            title: "Faulty Fans",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
          {
            title: "No Lights",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
          {
            title: "No Water",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
          {
            title: "No Water",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
          {
            title: "No Water",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
          {
            title: "No Water",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
          {
            title: "No Water",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
          {
            title: "No Water",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
          {
            title: "No Water",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
          },
        ]}
      ></SimpleCardGridBlock>
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
