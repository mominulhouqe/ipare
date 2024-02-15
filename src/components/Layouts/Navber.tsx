import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navber = () => {
  return (
    <header className="h-12">
      <nav className="w-full max-w-[1220px] px-[20px] h-full  flex justify-between items-center mx-auto">
        <span className="text-3xl">Ipare</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          
            <Button>Login</Button>
        
        </ul>
      </nav>
    </header>
  );
};

export default Navber;
