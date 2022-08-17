/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

interface InputProps {
  id: string;
  label: string;
  error: boolean;
  name: string;
  value: string;
  autoComplete?: string;
  updateValue: (v: string) => void;
  type: "text" | "number" | "email" | "password";
  required: boolean;
}

const Input: FunctionalComponent<InputProps> = ({
  id,
  name,
  error,
  label,
  value,
  autoComplete,
  updateValue,
  type,
  required,
}) => {
  return (
    <div class={tw`flex flex-col mb-2.5`} id={`i-wrapper_${id}`}>
      <label class={tw`flex flex-col text-sm`} htmlFor={id}>
        {label}
        <input
          id={id}
          class={tw`w-full px-3 h-10 border border-gray-300 rounded-lg mt-1.5 text-base  ${
            error ? "!border-brandRed" : ""
          }`}
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
