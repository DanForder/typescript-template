import classname from "classnames";
import { MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
  className?: string;
  disabled?: boolean;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button" | "reset";
};

const ROOT_CLASSNAME = "button";

const Button = ({
  className,
  disabled,
  label,
  onClick,
  type = "button",
}: ButtonProps) => {
  //classname allows us to combine multiple classes
  const rootClasses = classname(className, ROOT_CLASSNAME);

  return (
    <button
      className={rootClasses}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
