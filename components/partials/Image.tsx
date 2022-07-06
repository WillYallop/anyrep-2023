/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

export interface ImageProps {
  formats: Array<{
    url: string;
    mime:
      | "image/webp"
      | "image/avif"
      | "image/jpeg"
      | "image/jpg"
      | "image/png";
  }>;
  src: string;
  alt: string;
  loading: "eager" | "lazy" | undefined;
}

const Image: FunctionalComponent<ImageProps> = ({
  src,
  alt,
  formats,
  loading,
}) => {
  return (
    <picture>
      {formats.map((img) => {
        return <source srcSet={img.url} type={img.mime} />;
      })}
      <img
        class={tw`block w-full h-full object-cover`}
        src={src}
        alt={alt}
        loading={loading}
      />
    </picture>
  );
};

export default Image;
