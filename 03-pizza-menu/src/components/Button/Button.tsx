import './Button.scss';

import {
  ButtonHTMLAttributes,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
} from 'react';

type Props = {
  styleType?: 'link' | 'outlined' | 'text';
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Props;

export type ButtonComponent = {
  elementRef: HTMLButtonElement | null;
  customMethod?: () => void;
};

const Button = (
  { styleType, children, className, ...rest }: ButtonProps,
  forwardedRef: Ref<ButtonComponent>,
) => {
  const innerRef = useRef<HTMLButtonElement | null>(null);
  const buttonClassname = `app-button ${styleType ? `app-button-${styleType}` : ''} ${
    className ?? ''
  }`.trim();

  const customMethod = () => {
    console.log("I'm a custom method.");
  };

  useImperativeHandle(forwardedRef, () => ({
    elementRef: innerRef.current,
    customMethod,
  }));

  return (
    <button
      ref={(ref) => {
        innerRef.current = ref;
        if (typeof forwardedRef === 'function') forwardedRef({ elementRef: ref });
        else if (forwardedRef !== null && forwardedRef.current)
          forwardedRef.current.elementRef = ref;
      }}
      className={buttonClassname}
      {...rest}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
