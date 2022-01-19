import { CustomButtonWrapper } from "./CustomButtonWrapper";
import "./CustomButtonWrapper";

const CustomButton = ({ text, onClick }: CustomButtonProps) => {
  return (
    <CustomButtonWrapper href="#" onClick={onClick}>
      {text}
    </CustomButtonWrapper>
  );
};

export default CustomButton;
