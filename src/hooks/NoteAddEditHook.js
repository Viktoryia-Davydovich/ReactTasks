import { useState, useCallback } from "react";

import ParseInputField from "../helpers/inputFieldParser";

const useForm = (obj = {}) => {
  const [values, setValues] = useState(obj);

  const handleChange = useCallback(event => {
    event.persist();

    console.log(event.target);

    setValues(values => ({
      ...values,
      [event.target.name]: ParseInputField(event.target)
    }));
  }, []);

  return [values, handleChange];
};

export default useForm;
