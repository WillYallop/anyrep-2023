/** @jsx h */
import { h, JSX, FunctionalComponent } from "preact";
import { tw } from "@twind";
import {
  roundedSectionOuter,
  roundedSectionInner,
  wrapperMedium,
} from "../../utils/twind.ts";
// COmponents
import SectionIntro from "../partials/SectionIntro.tsx";

interface MapBlockProps {
  title: string;
  body: string;
}

const MapBlock: FunctionalComponent<MapBlockProps> = ({ title, body }) => {
  return (
    <section class={tw`${roundedSectionOuter} mt-10`}>
      <div class={tw`${roundedSectionInner} py-10 bg-sectionGrey`}>
        <div
          class={tw`${wrapperMedium} flex items-center flex-wrap-reverse md:flex-nowrap`}
        >
          {/* title */}
          <div class={tw`w-full !md:w-1/3`}>
            <SectionIntro title={title} body={body} />
          </div>
          {/* map */}
          <div class={tw`w-full !md:w-2/3 md:pl-20 pb-6 md:pb-0`}>
            <div class={tw`-mt-20 w-full rounded-t-2xl overflow-hidden`}>
              <iframe
                class={tw`w-full h-80 block border-b-8 border-brandDarkBlue`}
                title="Anyrep Google Maps Location"
                loading={"lazy"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.1401691055107!2d1.3593686158119225!3d52.639380579836974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e317d71bfd13%3A0xe64136f010e51a48!2sAnyrep!5e0!3m2!1sen!2suk!4v1555624037897!5m2!1sen!2suk"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapBlock;
