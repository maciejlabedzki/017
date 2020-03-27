import React from "react";

function ControlledInput({
  callback,
  type = "text",
  disabled = false,
  readOnly = false,
  defaultValue,
  placeholder = ""
}) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    callback(value);
  });

  return (
    <input
      defaultValue={defaultValue}
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={({ target: { value } }) => setValue(value)}
    />
  );
}

export default ControlledInput;
