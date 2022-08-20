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
import P from "../components/typography/P.tsx";

export default function FridgeFreezerRepairs() {
  // SEO
  const SEO = {
    meta: {
      title: "Fridge & Freezer Repairs | Norwich, Norfolk | Book online",
      description:
        "Book your fridge freezer repair online for same or next-day repairs. We have over 20 years of experience serving the Norwich, Norfolk area. Book online today!",
    },
    og: {
      title: "Fridge & Freezer Repairs | Norwich, Norfolk | Book online",
      description:
        "Book your fridge freezer repair online for same or next-day repairs. We have over 20 years of experience serving the Norwich, Norfolk area. Book online today!",
    },
    twitter: {
      title: "Fridge & Freezer Repairs | Norwich, Norfolk | Book online",
      description:
        "Book your fridge freezer repair online for same or next-day repairs. We have over 20 years of experience serving the Norwich, Norfolk area. Book online today!",
    },
  };

  const Head = (
    <Fragment>
      {/* script schema for service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fridge & Freezer Repairs",
          image: asset("/images/anyrep_metaimage.png"),
          description:
            "Book your fridge freezer repair online for same or next-day repairs. We have over 20 years of experience serving the Norwich, Norfolk area. Book online today!",
          provider: {
            "@type": "Organization",
            name: "Anyrep Appliance Repairs",
            url: "https://anyrep.co.uk",
            logo: asset("/images/logo.png"),
          },
          areaServed: {
            "@type": "Place",
            name: "Norwich, Norfolk",
          },
        })}
      </script>
    </Fragment>
  );

  return (
    <MainWrapper seo={SEO} head={Head}>
      <SimpleHeroBlock
        title={
          <Fragment>Is your fridge or freezer in need of repairs?</Fragment>
        }
        description={
          "If you have a faulty fridge or freezer, don't hesitate to call Anyrep today! Book online in under a minute!"
        }
        button={{ text: "Book a repair!", url: "/book" }}
      ></SimpleHeroBlock>
      <ServiceIntroBlock
        textarea={
          <Fragment>
            <P
              background={"light"}
              text={
                "Keep your food from spoiling! If your fridge or freezer is faulty, don’t hesitate to call us. We can do it all. We have over 25 years of experience in the trade and we repair same day where possible. Our engineers are regularly trained to service all models, including freestanding, integrated and built-in units from leading manufacturers."
              }
              className={tw`lg:!text-xl`}
            />
          </Fragment>
        }
      ></ServiceIntroBlock>
      <SimpleCardGridBlock
        title={"Common Faults"}
        body={
          "These are some common faults that we fix at Anyrep often. If none of these apply to you, don't worry."
        }
        cards={[
          {
            title: "Not making ice",
            body: "",
          },
          {
            title: "Ice on the back wall",
            body: "",
          },
          {
            title: "Leaking water dispenser",
            body: "",
          },
          {
            title: "Condensation inside",
            body: "",
          },
          {
            title: "Not cold",
            body: "",
          },
          {
            title: "No light",
            body: "",
          },
          {
            title: "Too cold",
            body: "",
          },
          {
            title: "Not freezing",
            body: "",
          },
          {
            title: "Broken thermostat",
            body: "",
          },
          {
            title: "No power",
            body: "",
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
      <CTABlock />
      <Footer />
    </MainWrapper>
  );
}
