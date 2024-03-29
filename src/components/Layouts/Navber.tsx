import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Navber = () => {
  return (
    <motion.header 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
      delay:1,
      duration:1,
    }}
    className="h-12 bg-white fixed w-full z-50">
      <nav className="w-full max-w-[1230px] px-[20px] h-full  flex justify-between items-center mx-auto">
        <span className="text-3xl">Ipare</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <Button>Login</Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navber;
