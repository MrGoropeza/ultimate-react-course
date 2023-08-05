import "./AccordionItem.scss";

import { ReactNode } from "react";

type Props = {
  index?: number;
  title?: string | ReactNode;
  children?: ReactNode;
  open?: boolean;
  onTrigger?: () => void;
};

const AccordionItem = ({ open, onTrigger, index, children, title }: Props) => {
  return (
    <li
      className="accordion-item-container"
      data-state={open ? "open" : ""}
      onClick={onTrigger}
    >
      <div className="accordion-item-title-container">
        {index !== undefined && (
          <div className="accordion-item-index">
            {String(index + 1).padStart(2, "0")}
          </div>
        )}

        <div className="accordion-item-title">{title}</div>

        <i className="accordion-item-trigger">{open ? "-" : "+"}</i>
      </div>

      {open && <div className="accordion-item-content">{children}</div>}
    </li>
  );
};

export default AccordionItem;
