import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};