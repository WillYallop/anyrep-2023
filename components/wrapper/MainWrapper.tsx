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
      <head></head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainWrapper;
