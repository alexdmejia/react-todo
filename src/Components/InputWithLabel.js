import React, {useEffect}from "react";

function InputWithLabel({
  name,
  id,
  value,
  placeholder,
  type = "text",
  onInputChange,
  children,
  
}) {
  const inputRef = React.useRef();
  
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
}

export default InputWithLabel;
