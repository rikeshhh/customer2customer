import React from "react";

const Input = ({
  placeholder,
  register,
  name,
  handleChange,
  className,
  type,
  accept,
}) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      accept={accept}
      className={className}
      {...register(name),{
        onChange:handleChange,
      }}
    />
  );
};

export default Input;
