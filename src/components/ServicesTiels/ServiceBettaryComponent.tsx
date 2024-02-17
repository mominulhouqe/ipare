import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServiceBettaryComponent = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "2 1"],
  });
  const scalValues = useTransform(scrollYProgress,[0, 1],[0.7, 1])
  return (
    <motion.div
      style={{
        scale: scalValues,
      }}
      ref={componentRef}
      className="col-span-12 bg-red-400 h-44 rounded-2xl"
    ></motion.div>
  );
};

export default ServiceBettaryComponent;
