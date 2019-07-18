const FIELD_VALUE_ATTR = {
  checkbox: "checked",
  default: "value"
};

export default function ParseInputField(input) {
  const attrName = FIELD_VALUE_ATTR[input.type] || FIELD_VALUE_ATTR.default;
  return input[attrName];
}
