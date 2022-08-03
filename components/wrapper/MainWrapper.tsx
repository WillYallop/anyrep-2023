/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { asset } from "$fresh/runtime.ts";
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

const MainWrapper: FunctionalComponent<MainWrapperProps> = ({ children }) => {
  return (
    <html>
      <head>
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="476ecccd-155d-43f0-9694-afc8949543fd"
        />
        // schema.org organisation script
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Anyrep Appliance Repairs",
              url: "https://anyrep.co.uk",
              sameAs: [
                "https://www.facebook.com/anyrep",
                "https://www.yell.com/biz/anyrep-domestic-and-commercial-appliance-repairs-norwich-7112578",
                "https://uk.trustpilot.com/review/anyrep.co.uk",
              ],
            }),
          }}
        />
      </head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainWrapper;
