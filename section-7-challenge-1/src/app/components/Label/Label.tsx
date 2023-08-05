import "./Label.scss";

import { ComponentProps } from "react";

type Props = ComponentProps<"label">;

const Label = ({ className, children, ...rest }: Props) => {
  return (
    <label className={`label ${className ?? ""}`} {...rest}>
      {children}
    </label>
  );
};

export default Label;
