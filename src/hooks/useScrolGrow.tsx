import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrolGrow = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "2 1"],
  });
  const scalValues = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const style = {
    scale: scalValues,
  };
  return {componentRef, style};
};

export default useScrolGrow;
