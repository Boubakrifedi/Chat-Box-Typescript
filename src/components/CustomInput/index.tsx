import { CustomInputWrapper } from "./CustomInputWrapper";

const CustomInput = ({
  value,
  onChange,
  placeholder,
  onKeyPress,
}: CustomInputProps) => {
  return (
    <CustomInputWrapper
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
    ></CustomInputWrapper>
  );
};

export default CustomInput;
