/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperMedium,
} from "../utils/twind.ts";
// Components
import MainWrapper from "../components/wrapper/MainWrapper.tsx";
import SimpleHeroBlock from "../components/blocks/SimpleHero.tsx";
import MapBlock from "../components/blocks/Map.tsx";
import AccordionBlock from "../components/blocks/Accordion.tsx";
import Footer from "../components/blocks/Footer.tsx";
// Islands
import MiniBookForm from "../islands/MiniBookForm.tsx";

export default function Book() {
  // SEO
  const SEO = {
    meta: {
      title: "Book your appliance repair | Anyrep",
      description:
        "Has your appliance broken down and left you stuck? Book a repair online with Anyrep today. With over 20 years experience, you can trust us to do the job right!",
    },
    og: {
      title: "Book your appliance repair | Anyrep",
      description:
        "Has your appliance broken down and left you stuck? Book a repair online with Anyrep today. With over 20 years experience, you can trust us to do the job right!",
    },
    twitter: {
      title: "Book your appliance repair | Anyrep",
      description:
        "Has your appliance broken down and left you stuck? Book a repair online with Anyrep today. With over 20 years experience, you can trust us to do the job right!",
    },
  };

  return (
    <MainWrapper seo={SEO}>
      <SimpleHeroBlock
        title={<Fragment>Book a repair!</Fragment>}
        description={
          "Has your appliance broken down and left you stuck? We can help you get it back to working order. Send us a message and we'll get back to you as soon as possible."
        }
      ></SimpleHeroBlock>

      <section class={tw`${roundedSectionOuter}`}>
        <div class={tw`${roundedSectionInner} py-20`}>
          <div
            class={tw`${wrapperMedium} flex items-start justify-center flex-wrap md:flex-nowrap`}
          >
            <MiniBookForm />
          </div>
        </div>
      </section>

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

      <Footer />
    </MainWrapper>
  );
}
