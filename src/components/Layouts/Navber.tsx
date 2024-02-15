import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navber = () => {
  return (
    <header className="h-12">
      <nav className="w-full max-w-[1220px] px-[20px] bg-green-300 h-full  flex justify-between items-center mx-auto">
        <span>Ipare</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/">
            <Button>Login</Button>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navber;
