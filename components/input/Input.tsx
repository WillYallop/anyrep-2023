/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface InputProps {
  label: string;
  name: string;
  value: string;
  autoComplete?: string;
  updateValue: (v: string) => void;
  type: "text" | "number" | "email" | "password";
  required: boolean;
}

const Input: FunctionalComponent<InputProps> = ({
  name,
  label,
  value,
  autoComplete,
  updateValue,
  type,
  required,
}) => {
  return (
    <div class={tw`flex flex-col mb-2.5`}>
      <label class={tw`flex flex-col text-sm`}>
        {label}
        <input
          class={tw`w-full px-3 h-10 border border-gray-300 rounded-lg mt-1.5 text-base`}
          name={name}
          autoComplete={autoComplete}
          value={value}
          type={type}
          required={required}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            updateValue(target.value || "");
          }}
        />
      </label>
    </div>
  );
};

export default Input;
