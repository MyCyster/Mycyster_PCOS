import { SideNav } from "./shared/SideNav";
import { TopNav } from "./shared/TopNav";
import { Outlet } from "react-router-dom";

export const AppHome = () => {
  return (
    <div className="grid lg:grid-cols-[12rem_auto]">
      <SideNav />
      <>
        <div className="hidden lg:flex lg:fixed top-0 left-[12rem] right-0 bg-white h-20">
          <TopNav />
        </div>
        <div className="lg:mt-20 lg:h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-6 py-4">
            <Outlet />
          </div>
        </div>
      </>
    </div>
  );
};
