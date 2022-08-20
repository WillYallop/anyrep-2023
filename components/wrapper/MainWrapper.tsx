/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";
import { asset, Head } from "$fresh/runtime.ts";
// Islands
import Header from "../../islands/Header.tsx";
import TopBar from "../partials/Topbar.tsx";

interface MainWrapperProps {
  seo: {
    meta: {
      title: string;
      description: string;
    };
    og: {
      title: string;
      description: string;
    };
    twitter: {
      title: string;
      description: string;
    };
  };
  head?: h.JSX.Element;
}

const MainWrapper: FunctionalComponent<MainWrapperProps> = ({
  children,
  seo,
  head,
}) => {
  return (
    <html>
      <Head>
        <title>{seo.meta.title}</title>
        <meta name="description" content={seo.meta.description} />
        {/* og meta */}
        <meta property="og:title" content={seo.og.title} />
        <meta property="og:description" content={seo.og.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://anyrep.co.uk"} />
        <meta
          property="og:image"
          content={asset("/images/anyrep_metaimage.png")}
        />
        {/* twitter meta */}
        <meta property="twitter:title" content={seo.twitter.title} />
        <meta
          property="twitter:description"
          content={seo.twitter.description}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={asset("images/anyrep_metaimage.png")}
        />
        <meta name="twitter:domain" content="https://anyrep.co.uk" />
        <meta name="twitter:image:alt" content="Anyrep Appliance Repairs" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="627" />
        <meta name="twitter:image:type" content="image/png" />
        <meta
          name="twitter:image:src"
          content={asset("images/anyrep_metaimage.png")}
        />
        {/* other meta */}
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="476ecccd-155d-43f0-9694-afc8949543fd"
        />
        <meta name="author" content="William Yallop"></meta>
        <meta name="theme-color" content="#001524"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={asset("/apple-touch-icon.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={asset("/favicon-32x32.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={asset("/favicon-16x16.png")}
        />
        <meta name="msapplication-TileColor" content="#001524" />
        {/*  */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Anyrep Appliance Repairs",
              url: "https://anyrep.co.uk",
              image: asset("images/anyrep_metaimage.png"),
              description:
                "Here at Anyrep Appliance Repairs we offer our reliable services on the same day where possible! So if you need your appliance repaired and you reside in the Norwich, Norfolk area then look no further. We have over 25 years of experience in the trade and our services are carried out by factory trained professionals. ",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3 Montrose Court, Norwich, Norfolk, NR7 0RY",
                addressLocality: "Norwich",
                addressRegion: "Norfolk",
                postalCode: "NR7 0RY",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "52.63937885926824",
                longitude: "1.3615421040698772",
              },
              telephone: "+44 (0)7525 150999",
              openingHours: "Mo, Tu, We, Th, Fr 08:00-17:00",
              sameAs: [
                "https://www.facebook.com/anyrep",
                "https://www.yell.com/biz/anyrep-domestic-and-commercial-appliance-repairs-norwich-7112578",
                "https://uk.trustpilot.com/review/anyrep.co.uk",
              ],
            }),
          }}
        />
        {head ? head : null}
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </Head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>

        <a
          href="tel:07525150999"
          class={tw`fixed right-5 bottom-5 h-16 w-16 bg-brandRed rounded-full z-50 hover:bg-brandRedHover text-white flex items-center justify-center`}
          aria-label={`Call us on 07525 150999`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class={tw`h-6 w-6 fill-current`}
          >
            <path d="m511.2 387-23.3 100.8a31 31 0 0 1-30.4 24.2A458 458 0 0 1 0 54.5a31 31 0 0 1 24.2-30.4L125 .8a31.4 31.4 0 0 1 35.8 18.1l46.5 108.5a31.3 31.3 0 0 1-9 36.5L144.5 207A349.7 349.7 0 0 0 304 366.6l44-53.8a31.1 31.1 0 0 1 36.5-9L493 350.3c13.1 6.9 21.6 22.1 18.2 36.7z" />
          </svg>
        </a>
      </body>
    </html>
  );
};

export default MainWrapper;
