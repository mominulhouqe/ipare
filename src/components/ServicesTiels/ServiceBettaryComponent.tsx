import useScrolGrow from "@/hooks/useScrolGrow";
import { motion} from "framer-motion";


const ServiceBettaryComponent = () => {
const{style,componentRef} =useScrolGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="col-span-12 bg-red-400 h-44 rounded-2xl"
    ></motion.div>
  );
};

export default ServiceBettaryComponent;
