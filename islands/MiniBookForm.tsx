/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
// components
import Input from "../components/input/Input.tsx";
import Textarea from "../components/input/Textarea.tsx";

const MiniBookForm: FunctionalComponent = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [appliance, setAppliance] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form class={tw`p-5`}>
      <div class={tw`grid grid-cols-2 gap-5`}>
        <Input
          label="Name (*)"
          name={"name"}
          value={name}
          updateValue={setName}
          autoComplete={"name"}
          type={"text"}
          required={true}
        />
        <Input
          label="Phone number (*)"
          name={"phoneNumber"}
          value={number}
          updateValue={setNumber}
          autoComplete={"tel"}
          type={"number"}
          required={true}
        />
      </div>
      <Input
        label="Appliance (*)"
        name={"appliance"}
        value={appliance}
        updateValue={setAppliance}
        autoComplete={"off"}
        type={"text"}
        required={true}
      />
      <Textarea
        label="Message"
        name={"message"}
        value={message}
        updateValue={setMessage}
        required={false}
      />
      <input
        class={tw` bg-brandRed cursor-pointer text-white mt-5 text-center duration-300 text-base font-medium transition-colors flex items-center rounded-xl px-7 h-11`}
        type="submit"
        value="Book a repair!"
      />
    </form>
  );
};

export default MiniBookForm;
