import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimationTitles from "../components/functions/AnimationTitles";
import "./join.css";

function Join() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Change threshold as per your requirement
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className="join">
      <Container>
        <AnimationTitles className=" title mx-auto" title="Community " />
        <div className="wrapper-img" ref={ref}>
          <motion.div
            className="align-items-start flex-column"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <img
              className="community-img"
              src={require("../images/illustration/Group 3.png")}
              alt="img"
            />
          </motion.div>
          <motion.div
            className="align-items-start flex-column"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              className="community-img"
              src={require("../images/illustration/Group 8.png")}
              alt="img"
            />
          </motion.div>
          <motion.div
            className="align-items-start flex-column"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              className="community-img"
              src={require("../images/illustration/Group 9.png")}
              alt="img"
            />
          </motion.div>
          <motion.div
            className="align-items-start flex-column"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img
              className="community-img"
              src={require("../images/illustration/Group 11.png")}
              alt="img"
            />
          </motion.div>
          <motion.div
            className="align-items-start flex-column"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img
              className="community-img"
              src={require("../images/illustration/Group 12.png")}
              alt="img"
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Join;
