import { MouseEventHandler } from "react";

interface Props {
  clickHandler: MouseEventHandler;
  type: "submit" | "reset" | "button";
  disabled: boolean;
  hide: boolean;
  color: string;
  svg: JSX.Element; 
  classname: string;
}

function RoundButton(props: Props) {
  return (
    <button
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.disabled}
      hidden={props.hide}
      className={`bg-primary-200${
        props.color
      } hover:scale-90 w-10 h-10 rounded-full flex items-center justify-center ${
        props.classname ?? ""
      }`}
    >
      {props.svg}
    </button>
  );
}

RoundButton.defaultProps = {
  type: "button",
  disabled: false,
  hide: false,
};

export default RoundButton;
