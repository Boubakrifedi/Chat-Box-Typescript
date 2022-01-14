import "./index.css";

const CustomInput = ({ value, onChange, placeholder, onKeyPress }:CustomInputProps) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default CustomInput;
