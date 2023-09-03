import React from "react";
import ReactQueryProvider from "./react-query";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Provider;
