/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface TextareaProps {
  id: string;
  label: string;
  error: boolean;
  name: string;
  value: string;
  updateValue: (v: string) => void;
  required: boolean;
}

const Textarea: FunctionalComponent<TextareaProps> = ({
  id,
  name,
  error,
  label,
  value,
  updateValue,
  required,
}) => {
  return (
    <div class={tw`flex flex-col mb-2.5`} id={`i-wrapper_${id}`}>
      <label class={tw`flex flex-col  text-sm`} htmlFor={id}>
        {label}
        <textarea
          id={id}
          class={tw`w-full !p-3 h-[150px] border border-gray-300 rounded-lg mt-1.5 text-base resize-none ${
            error ? "border-brandRed" : ""
          }`}
          name={name}
          value={value}
          required={required}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            updateValue(target.value || "");
          }}
        ></textarea>
      </label>
    </div>
  );
};

export default Textarea;
