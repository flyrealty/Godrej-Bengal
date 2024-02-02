import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimationTitles from "../components/functions/AnimationTitles";
import "./Partners.css";

// Import your images directly
import group22 from "../images/Group 22.png";
import group23 from "../images/Group 23.png";
import group24 from "../images/Group 24.png";
import group25 from "../images/Group 25.png";
import group26 from "../images/Group 26.png";
import group27 from "../images/Group 27.png";

const images = [group22, group23, group24, group25, group26, group27];

function Partners() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const numImages = window.innerWidth >= 768 ? 6 : 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="partners"
    >
      <AnimationTitles
        className="title mx-auto"
        title="Unique Selling Point (USP)"
      />
      {Array.from({ length: Math.ceil(images.length / numImages) }).map(
        (_, index) => (
          <motion.div
            key={index}
            className="media1"
            initial={{ opacity: 0, x: -1000 }} // Move from the left
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -1000 }} // Move to the center
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
          {images
            .slice(index * numImages, (index + 1) * numImages)
            .map((image, i) => (
              <motion.img
                key={i}
                className="photo1" 
                src={image}
                alt={`Layer ${index * numImages + i + 1}`}
                initial={{ opacity: 0, x: -1000 }} 
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -1000 }} 
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            ))}
          </motion.div>
        )
      )}
    </motion.div>
  );
}

export default Partners;
