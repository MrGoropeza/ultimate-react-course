import "./Button.scss";

import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

const Button = ({ children, ...rest }: Props) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
