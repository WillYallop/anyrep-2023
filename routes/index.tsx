/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";
// Components
import MainWrapper from "../components/wrapper/MainWrapper.tsx";
import HeroBlock from "../components/blocks/Hero.tsx";
import IntroBlock from "../components/blocks/Intro.tsx";
import CardGridBlock from "../components/blocks/CardGrid.tsx";
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
      title: "Anyrep Appliance Repairs | Norwich, Norfolk | Book online",
      description:
        "With over 20 years of experience serving the Norwich, Norfolk area. Trust Anyrep to get your appliance back up and running. Book online or call us today!",
    },
    og: {
      title: "Anyrep Appliance Repairs | Norwich, Norfolk | Book online",
      description:
        "With over 20 years of experience serving the Norwich, Norfolk area. Trust Anyrep to get your appliance back up and running. Book online or call us today!",
    },
    twitter: {
      title: "Anyrep Appliance Repairs | Norwich, Norfolk | Book online",
      description:
        "With over 20 years of experience serving the Norwich, Norfolk area. Trust Anyrep to get your appliance back up and running. Book online or call us today!",
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
          "Book your appliance repair online with Anyrep today and we'll help get your appliance back up and running!"
        }
      ></HeroBlock>
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
                "Here at Anyrep Appliance Repairs, we offer our reliable services on the same day where possible! So if you need your appliance repaired and reside in the Norwich, Norfolk area look no further. We have over 25 years of experience in the trade and all of our services are carried out by trained professionals."
              }
            />
          </Fragment>
        }
      ></IntroBlock>
      <CardGridBlock
        title={"Our Services"}
        body={
          "Here are some of the appliances we service. Whether it needs repair, maintenance or replacing entirely. We have the solution for you!"
        }
        cards={[
          {
            image: {
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
              loading: "lazy",
            },
            title: "Washing Machines Repairs",
            body: "Blocked pump, failing to spin, not draining? Is the door stuck, leaking or perhaps a noisy drum? Don't worry.",
            link: {
              href: "/washing-machine-repairs",
              text: "Find out more",
            },
          },
          {
            image: {
              formats: [
                {
                  url: asset("/images/fridgeFreezers/card.avif"),
                  mime: "image/avif",
                },
                {
                  url: asset("/images/fridgeFreezers/card.webp"),
                  mime: "image/webp",
                },
                {
                  url: asset("/images/fridgeFreezers/card.jpg"),
                  mime: "image/jpg",
                },
              ],
              alt: "A woman getting food out of the fridge.",
              src: asset("/images/fridgeFreezers/card.jpg"),
              loading: "lazy",
            },
            title: "Fridge & Freezer Repairs",
            body: "Has it stopped making ice? Is it leaking, is there condensation on the inside? Is it not cold, is the light out?",
            link: {
              href: "/fridge-and-freezer-repairs",
              text: "Find out more",
            },
          },
          {
            image: {
              formats: [
                {
                  url: asset("/images/dishwashers/card.avif"),
                  mime: "image/avif",
                },
                {
                  url: asset("/images/dishwashers/card.webp"),
                  mime: "image/webp",
                },
                {
                  url: asset("/images/dishwashers/card.jpg"),
                  mime: "image/jpg",
                },
              ],
              alt: "An unstacked dishwasher.",
              src: asset("/images/dishwashers/card.jpg"),
              loading: "lazy",
            },
            title: "Dishwasher Repairs",
            body: "Have you got a broken hinge, blocked pumps, or a broken panel? Is it leaking, making loud noises, or just not cleaning?",
            link: {
              href: "/dishwasher-repairs",
              text: "Find out more",
            },
          },
          {
            image: {
              formats: [
                {
                  url: asset("/images/tumbleDryers/card.avif"),
                  mime: "image/avif",
                },
                {
                  url: asset("/images/tumbleDryers/card.webp"),
                  mime: "image/webp",
                },
                {
                  url: asset("/images/tumbleDryers/card.jpg"),
                  mime: "image/jpg",
                },
              ],
              alt: "A woman stacking the tumble dryer.",
              src: asset("/images/tumbleDryers/card.jpg"),
              loading: "lazy",
            },
            title: "Tumble Dryer Repairs",
            body: "Noisy operation? No drum action? Snapped belt, leaking, broken timer? Or maybe your clothes are just not drying!",
            link: {
              href: "/tumble-dryer-repairs",
              text: "Find out more",
            },
          },
          {
            image: {
              formats: [
                {
                  url: asset("/images/ovens/card.avif"),
                  mime: "image/avif",
                },
                {
                  url: asset("/images/ovens/card.webp"),
                  mime: "image/webp",
                },
                {
                  url: asset("/images/ovens/card.jpg"),
                  mime: "image/jpg",
                },
              ],
              alt: "A mother and a child baking using the oven.",
              src: asset("/images/ovens/card.jpg"),
              loading: "lazy",
            },
            title: "Oven Repairs",
            body: "Not heating, broken door? Smells of gas, broken thermostat, broken seal? Fan not spinning, or perhaps the grills broke? ",
            link: {
              href: "/oven-repairs",
              text: "Find out more",
            },
          },
          {
            image: {
              formats: [
                {
                  url: asset("/images/commercialAppliances/card.avif"),
                  mime: "image/avif",
                },
                {
                  url: asset("/images/commercialAppliances/card.webp"),
                  mime: "image/webp",
                },
                {
                  url: asset("/images/commercialAppliances/card.jpg"),
                  mime: "image/jpg",
                },
              ],
              alt: "A commercial fridge, fully stocked up.",
              src: asset("/images/commercialAppliances/card.jpg"),
              loading: "lazy",
            },
            title: "Commercial Appliance Repairs",
            body: "Whether your commercial refrigerator, oven, fryer, cooker, freezer, icemaker, washer or cooler is broken. We can fix it!",
            link: {
              href: "/commercial-appliance-repairs",
              text: "Find out more",
            },
          },
        ]}
      ></CardGridBlock>
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
      <CTABlock />
      <Footer />
    </MainWrapper>
  );
}
