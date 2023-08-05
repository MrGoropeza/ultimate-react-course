import "./Field.scss";

import { ComponentProps } from "react";

type Props = ComponentProps<"div">;

const Field = ({ className, children, ...rest }: Props) => {
  return (
    <div className={`field ${className ?? ""}`} {...rest}>
      {children}
    </div>
  );
};

export default Field;
