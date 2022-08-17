/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
// Util
import formValidation from "../utils/form-validation.ts";
// components
import Input from "../components/input/Input.tsx";
import Textarea from "../components/input/Textarea.tsx";

const MiniBookForm: FunctionalComponent = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [appliance, setAppliance] = useState("");
  const [applianceError, setApplianceError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const [messageSent, setMessageSent] = useState(false);
  const [messageSentError, setMessageSentError] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const [disableForm, setDisableForm] = useState(true);

  const onChange = (event: Event) => {
    const formValidationRes = formValidation(event);
    switch (formValidationRes.name) {
      case "name":
        setNameError(formValidationRes.inputValid);
        break;
      case "email":
        setEmailError(formValidationRes.inputValid);
        console.log(formValidationRes.inputValid);
        break;
      case "phoneNumber":
        setNumberError(formValidationRes.inputValid);
        break;
      case "appliance":
        setApplianceError(formValidationRes.inputValid);
        break;
      case "message":
        setMessageError(formValidationRes.inputValid);
        break;
      default:
        break;
    }
    setDisableForm(formValidationRes.formValid);
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!disableForm) {
      setInProgress(true);
      fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          number,
          appliance,
          message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setMessageSent(true);
            setInProgress(false);
            setName(``);
            setEmail(``);
            setNumber(``);
            setAppliance(``);
            setMessage(``);
            setTimeout(() => {
              setMessageSent(false);
            }, 5000);
          } else {
            setMessageSentError(true);
            setInProgress(false);
            setTimeout(() => {
              setMessageSentError(false);
            }, 5000);
          }
        })
        .catch((err) => {
          console.log(err);
          setMessageSentError(true);
          setInProgress(false);
          setTimeout(() => {
            setMessageSentError(false);
          }, 5000);
        });
    }
  };

  return (
    <form
      class={tw`w-full`}
      onSubmit={handleSubmit}
      onChange={onChange}
      noValidate={true}
    >
      <div class={tw`grid  grid-cols-1 sm:grid-cols-2 sm:gap-5`}>
        <Input
          id={"nameInp"}
          label="Name (*)"
          error={nameError}
          name={"name"}
          value={name}
          updateValue={setName}
          autoComplete={"name"}
          type={"text"}
          required={true}
        />
        <Input
          id={"phoneInp"}
          label="Phone number (*)"
          error={numberError}
          name={"phoneNumber"}
          value={number}
          updateValue={setNumber}
          autoComplete={"tel"}
          type={"number"}
          required={true}
        />
      </div>
      <div class={tw`grid grid-cols-1 sm:grid-cols-2 sm:gap-5`}>
        <Input
          id={"emailInp"}
          label="Email (*)"
          error={emailError}
          name={"email"}
          value={email}
          updateValue={setEmail}
          autoComplete={"email"}
          type={"email"}
          required={true}
        />
        <Input
          id={"applianceInp"}
          label="Appliance"
          error={applianceError}
          name={"appliance"}
          value={appliance}
          updateValue={setAppliance}
          autoComplete={"off"}
          type={"text"}
          required={false}
        />
      </div>
      <Textarea
        id={"messageinp"}
        label="What's the issue?"
        error={messageError}
        name={"message"}
        value={message}
        updateValue={setMessage}
        required={false}
      />
      <div class={tw`md:flex md:items-center md:justify-between mt-5`}>
        <input
          disabled={disableForm}
          class={tw` bg-brandRed cursor-pointer text-white mr-5 text-center duration-300 text-base font-medium transition-colors !border-brandRed flex items-center rounded-xl px-7 h-11 disabled:bg-opacity-60`}
          type="submit"
          value={`${inProgress ? "Sending" : "Book a repair!"}`}
        />

        <div class={tw`md:mt-0 mt-5`}>
          {messageSent ? <p class={tw``}>Enquiry sent!</p> : null}
          {messageSentError ? <p class={tw``}>Something went wrong!</p> : null}
        </div>
      </div>
    </form>
  );
};

export default MiniBookForm;
