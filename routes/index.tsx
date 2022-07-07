/** @jsx h */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";
// Islands
// Components
import MainWrapper from "../components/wrapper/MainWrapper.tsx";
import HeroBlock from "../components/blocks/Hero.tsx";
import IntroBlock from "../components/blocks/Intro.tsx";
import CardGridBlock from "../components/blocks/CardGrid.tsx";
import MapBlock from "../components/blocks/Map.tsx";
import AccordionBlock from "../components/blocks/Accordion.tsx";
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. Morbi aliquet leo ut quam luctus venenatis. Integer aliquam nisl ac ipsum feugiat iaculis. Donec metus ex, dictum vitae magna et, aliquet imperdiet lacus. Morbi non neque lacinia, faucibus tellus ac, commodo nunc. Aliquam ultrices sed dolor nec congue."
              }
            />
          </Fragment>
        }
      ></IntroBlock>
      <CardGridBlock
        title={"Our Services"}
        body={
          "Here are some of the appliances we service. Whether its in need of repair, maintenance or needs replacing entirely. We have the solution for you!"
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
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
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
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
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
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
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
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
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
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
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
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum tortor. Aenean vitae dui tortor. ",
            link: {
              href: "/commercial-appliance-repairs",
              text: "Find out more",
            },
          },
        ]}
      ></CardGridBlock>
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
      />
    </MainWrapper>
  );
}
