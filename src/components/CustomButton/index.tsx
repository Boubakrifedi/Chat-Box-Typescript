import "./index.css";

const CustomButton = ({ text, onClick }:CustomButtonProps) => {
  return (
    <a href="#" onClick={onClick}>
      {text}
    </a>
  );
};

export default CustomButton;
