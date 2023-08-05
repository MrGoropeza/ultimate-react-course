import "./Accordion.scss";

import {
  Children,
  ComponentProps,
  ReactElement,
  ReactNode,
  isValidElement,
  useState,
} from "react";
import { AccordionItem } from "..";

type AccordionItemType =
  | ReactElement<ComponentProps<typeof AccordionItem>, typeof AccordionItem>
  | ReactNode;

type Props = {
  children?: ReactNode;
  multiple?: boolean;
};

const Accordion = ({ multiple, children }: Props) => {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  return (
    <ul className="accordion-container">
      {Children.map<AccordionItemType, AccordionItemType>(
        children,
        (child, index) => {
          if (isValidElement<ComponentProps<typeof AccordionItem>>(child)) {
            const isOpen = activeItems.some((item) => item === index);
            const handleTrigger = () => {
              if (isOpen)
                setActiveItems((prev) => prev.filter((item) => item !== index));

              if (multiple && !isOpen)
                setActiveItems((prev) => [...prev, index]);
              if (!multiple && !isOpen) setActiveItems([index]);
            };

            return (
              <child.type
                index={index}
                open={isOpen}
                onTrigger={handleTrigger}
                {...child.props}
              ></child.type>
            );
          }
        }
      )}
    </ul>
  );
};

export default Accordion;
