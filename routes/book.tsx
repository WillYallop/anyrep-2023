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
        title={"Serving the Norwich, Norfolk area!"}
        body={"If your machine has left you stuck, dont hesitate to call us!"}
      ></MapBlock>
      <AccordionBlock
        accordions={[
          {
            id: 1,
            title: "What area do you cover?",
            body: [
              "At Anyrep, we offer our appliance repair services to the greater Norwich, Norfolk area. So, if you reside there and need your appliance repaired, don't hesitate to contact us right away.",
            ],
          },
          {
            id: 2,
            title: "How long will my repair take?",
            body: [
              "We aim to complete repairs on the same day where possible, and they typically last between 1 and 2 hours. But in the case, you require a part we don't keep in stock, we will rearrange another visit ASAP.",
            ],
          },
          {
            id: 3,
            title: "Will my machine need new parts?",
            body: [
              "Depending on the issue with your appliance you may not need parts. However, in the case you do, we keep common parts in stock so we can ensure a speedy and professional repair service.",
            ],
          },
          {
            id: 4,
            title: "How does your pricing work?",
            body: [
              "For domestic appliance repairs, we charge a fixed call-out fee, and the cost of any parts if required. That's it. So regardless of how long it takes to get the job done, you arent going to be hit with hidden fees. For commercial appliance repairs, we charge a minimal call-out fee, an hourly fee and then the price of parts if required.",
            ],
          },
        ]}
      ></AccordionBlock>

      <Footer />
    </MainWrapper>
  );
}
