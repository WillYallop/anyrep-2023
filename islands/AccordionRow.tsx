/** @jsx h */
import { h, JSX, FunctionalComponent, createRef } from "preact";
import { useState, useEffect } from "preact/hooks";
import { tw } from "@twind";
// typography
import P from "../components/typography/P.tsx";

export interface AccordionRowProps {
  title: string;
  body: Array<string>;
  id: number;
}

const AccordionRow: FunctionalComponent<AccordionRowProps> = ({
  title,
  body,
  id,
}) => {
  const [state, setState] = useState(id === 1 ? true : false);
  const [maxHeight, setMaxHeight] = useState<number>(1000);

  const ref = createRef();

  useEffect(() => {
    setMaxHeight(ref.current.scrollHeight);
    if (id === 1) {
      toggleAccordion(state);
    }
  }, []);

  const toggleAccordion = (s: boolean) => {
    setState(s);
    if (s) {
      ref.current.style.maxHeight = `${maxHeight}px`;
    } else ref.current.style.maxHeight = `${0}px`;
  };

  if (title) {
    return (
      <li
        class={tw`w-full flex-col border-b border-brandDarkBlue relative py-2 last:border-b-0 border-opacity-20 first:pt-0 ${
          state ? "pb-4" : ""
        }`}
      >
        <button
          id={`accordion-header-${id}`}
          class={tw`block w-full text-left text-lg font-medium transition-[margin] duration-300 pr-12 !focus:outline-none py-2${
            state ? "mb-3" : ""
          }`}
          aria-expanded={state}
          aria-controls={`accordion-${id}`}
          onClick={() => toggleAccordion(!state)}
        >
          {title}
        </button>
        <button
          aria-expanded={state}
          aria-controls={`accordion-${id}`}
          aria-label={"Toggle accordion"}
          onClick={() => toggleAccordion(!state)}
          class={tw`absolute top-1/2 -translate-y-1/2 right-0 h-8 w-8 rounded-1/2 bg-brandGrey border flex items-center justify-center`}
        >
          {!state ? (
            <svg
              class={tw`h-4`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
            </svg>
          ) : (
            <svg
              class={tw`h-4`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
            </svg>
          )}
        </button>
        <section
          id={`accordion-${id}`}
          class={tw`max-h-0 overflow-hidden transition-all duration-300 pr-12`}
          ref={ref}
        >
          {body.map((text) => {
            return (
              <P
                text={text}
                background={"light"}
                className={tw`mb-2 last:mb-0`}
              />
            );
          })}
        </section>
      </li>
    );
  } else return null;
};

export default AccordionRow;
