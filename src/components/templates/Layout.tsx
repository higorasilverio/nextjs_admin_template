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
    <div className="dark flex h-screen w-screen ">
      <SideMenu />
      <div
        className="flex flex-col w-full 
        p-7 bg-zinc-100 dark:bg-zinc-700"
      >
        <Header title={title} subtitle={subtitle} />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
