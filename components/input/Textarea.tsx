/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  updateValue: (v: string) => void;
  required: boolean;
}

const Textarea: FunctionalComponent<TextareaProps> = ({
  name,
  label,
  value,
  updateValue,
  required,
}) => {
  return (
    <div class={tw`flex flex-col mb-2.5`}>
      <label class={tw`flex flex-col  text-sm`}>
        {label}
        <textarea
          class={tw`w-full py-3 h-[150px] border border-gray-300 rounded-lg mt-1.5 text-base`}
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
