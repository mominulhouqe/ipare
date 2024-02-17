import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const HeroSection = () => {
  const intro = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };

  const introChildren = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,

      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  const latop = {
    initial: {
      y: 0,
      scale: 5,
      rotate: 0,
    },
    animate: {
      y: 20,
      rotate: -30,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <Container className="h-screen grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 mx-auto ">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChildren}
            className="lg:text-7xl text-4xl  font-bold mb-6"
          >
            <span className="text-gray">Don't worry ,</span>
            <br />
            <span>We will fix it.</span>
          </motion.h1>
          <motion.p variants={introChildren} className="text-dark-gray mb-4">
            Lorem ipsum <span>dolor</span> sit amet consectetur, adipisicing
            elit. Impedit voluptate accusamus quas <span>eaque</span> cumque!
            Eum.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a Service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={latop}
          initial="initial"
          animate="animate"
          className="w-3/4 md:max-w-sm mx-auto"
        >
          <img
            className=" w-full "
            src="https://i.ibb.co/7YVWVhq/fotor-ai-20230920171736.jpg"
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
