import { Outlet } from "react-router-dom";
import Sideber from "./Sideber";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <Sideber />
      <div className="col-span-10 bg-slate-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
