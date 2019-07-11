import { useState, useCallback } from "react";
const useToggle = initial => {
  const [value, setValue] = useState(initial);

  return [value, useCallback(() => setValue(status => !status))];
};

export default useToggle;
