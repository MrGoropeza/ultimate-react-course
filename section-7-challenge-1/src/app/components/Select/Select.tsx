import "./Select.scss";

import { ComponentProps } from "react";

export type SelectOption = {
  label: string;
  value: string | number;
};

type Props = ComponentProps<"select"> & { options: SelectOption[] };

const Select = ({ options, ...rest }: Props) => {
  return (
    <select {...rest}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
