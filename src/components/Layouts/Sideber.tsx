import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sideber = () => {
  return (
    <aside className="h-screen bg-zinc-200 col-span-2 sticky left-0 top-0 overflow-auto p-2 lg:p-5">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "bg-gray p-2 rounded-md hover:bg-zinc-500 transition-all hover:text-white flex gap-2",
              {
                "bg-zinc-500 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "bg-gray p-2 rounded-md hover:bg-zinc-500 transition-all hover:text-white flex gap-2",
              {
                "bg-zinc-500 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "bg-gray p-2 rounded-md hover:bg-zinc-500 transition-all hover:text-white flex gap-2",
              {
                "bg-zinc-500 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Service</span>
        </NavLink>
       
      </nav>
    </aside>
  );
};

export default Sideber;
