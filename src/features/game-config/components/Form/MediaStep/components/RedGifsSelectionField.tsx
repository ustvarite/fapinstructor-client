import { Field } from "formik";

import { FormikAutocomplete } from "@/components/Form";

const textFieldProps = {
  label: "Redgifs",
  helperText: "Enter a Redgif tag and then press enter.",
  fullWidth: true,
  variant: "outlined",
};

export default function RedditSelectionField() {
  return (
    <Field
      name="redgifs"
      limitTags={10}
      component={FormikAutocomplete}
      textFieldProps={textFieldProps}
      multiple
      freeSolo
      filterSelectedOptions
      breakSpaces
      options={[]}
    />
  );
}
