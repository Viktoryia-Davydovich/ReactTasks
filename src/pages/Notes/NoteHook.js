import { useState, useCallback } from "react";

const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = useCallback(event => {
    event.persist();
    console.log(event);
    event.target.type === "checkbox"
      ? setValues(values => ({ ...values, tag: event.target.checked }))
      : setValues(values => ({
          ...values,
          [event.target.name]: event.target.value.trim()
        }));
  }, []);

  return {
    handleChange,
    values
  };
};

export default useForm;
