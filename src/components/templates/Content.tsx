import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return <div className="flex flex-col mt-7">{children}</div>;
};
export default Content;
