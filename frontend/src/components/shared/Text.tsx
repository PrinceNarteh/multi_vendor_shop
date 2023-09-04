import React from "react";

type TextProps<C extends React.ElementType> = {
  as?: C;
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  TextProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

export const Text = <C extends React.ElementType>({
  as,
  children,
  ...restProps
}: Props<C>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>;
};
