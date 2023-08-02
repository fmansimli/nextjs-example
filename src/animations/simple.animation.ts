import { Variants } from "framer-motion";

export const simpleVariants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 + 0.3 }
  }),
  hidden: {
    opacity: 0,
    y: -900
  },
  whileHover: {
    scaleX: 1.2,
    transition: { duration: 0.5 }
  },
  whileDrag: {
    rotateZ: 90,
    transition: { duration: 0.5 }
  }
};
