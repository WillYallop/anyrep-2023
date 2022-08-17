/** @jsx h */
import { h, FunctionalComponent } from "preact";
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
}

const MainWrapper: FunctionalComponent<MainWrapperProps> = ({
  children,
  seo,
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
      </Head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainWrapper;
