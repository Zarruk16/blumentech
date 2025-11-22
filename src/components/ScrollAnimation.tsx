import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
}

const ScrollAnimation = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
  distance = 30,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
      case "fade":
        return { opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    if (isInView) {
      switch (direction) {
        case "up":
        case "down":
          return { y: 0, opacity: 1 };
        case "left":
        case "right":
          return { x: 0, opacity: 1 };
        case "fade":
          return { opacity: 1 };
        default:
          return { y: 0, opacity: 1 };
      }
    } else {
      return getInitialPosition();
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={getAnimatePosition()}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
