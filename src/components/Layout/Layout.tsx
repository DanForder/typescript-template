import { PropsWithChildren } from "react";
import "./Layout.scss";

type LayoutProps = {};

const ROOT_CLASSNAME = "layout";

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div className={ROOT_CLASSNAME}>
      <main className={`${ROOT_CLASSNAME}__main`}>{children}</main>
    </div>
  );
};

export default Layout;
