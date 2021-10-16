import { ComponentPropsWithoutRef, ElementType } from "react";

import { Props } from "./types";

const Button = <T extends ElementType = "button">({
  as,
  className = "",
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "button";

  return (
    <Component
      className={`inline-block py-2 px-4 rounded white ${className}`}
      {...props}
    />
  );
};

export default Button;
