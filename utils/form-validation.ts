/** @jsx h */

export type CustomValidation = Array<{
  fieldName: string;
  validator: (value: string) => string;
}>;

// check validation for current changed input
// return state of whole form validation

const formIsValid = (
  e: Event,
  customValidation?: CustomValidation
): {
  inputValid: boolean;
  formValid: boolean;
  name: string;
} => {
  e.preventDefault();

  const input = e.target as HTMLInputElement;
  const form = input.form as HTMLFormElement;

  // Reset fields
  input.setCustomValidity("");

  // Add custom validators
  if (customValidation) {
    customValidation.forEach((conf) => {
      if (input.name === conf.fieldName) {
        const err = conf.validator(input.value);
        input.setCustomValidity(err);
      }
    });
  }

  return {
    name: input.name,
    inputValid: !input.checkValidity(),
    formValid: !form.checkValidity(),
  };
};

export default formIsValid;
