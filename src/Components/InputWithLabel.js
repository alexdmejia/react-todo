import React, {useEffect}from "react";
import PropTypes from "prop-types";


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

InputWithLabel.protoTypes={
  name : PropTypes.string,
  id : PropTypes.string,
  value  : PropTypes.string,
  placeholder : PropTypes.string,
  type : PropTypes.string,
  onInputChange : PropTypes.func,
  children : PropTypes.object,
};
export default InputWithLabel;
