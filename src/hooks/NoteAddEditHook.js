import { useState, useCallback } from "react";

const useForm = (obj = {}) => {
  const [values, setValues] = useState(obj);

  const handleChange = useCallback(event => {
    event.persist();
    event.target.type === "checkbox"
      ? setValues(values => ({ ...values, tag: event.target.checked }))
      : setValues(values => ({
          ...values,
          [event.target.name]: event.target.value.trim()
        }));
  }, []);

  return [values, handleChange];
};

export default useForm;
