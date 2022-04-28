import { ReactNode } from "react";
import Content from "./Content";
import Header from "./Header";
import SideMenu from "./SideMenu";

type LayoutProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

const Layout = ({ title, subtitle, children }: LayoutProps) => {
  return (
    <div>
      <SideMenu />
      <Header title={title} subtitle={subtitle} />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
