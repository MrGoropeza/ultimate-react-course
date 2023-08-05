import "./Input.scss";

import { ComponentProps } from "react";

type Props = ComponentProps<"input">;

const Input = ({ ...rest }: Props) => {
  return <input {...rest} />;
};

export default Input;
