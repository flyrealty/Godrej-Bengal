import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";
import "./Developers.css";
import { Container, Card } from "react-bootstrap"; // Import Card from react-bootstrap
import { useEffect } from "react";

function Developers() {
  useEffect(() => {
    const handleScroll = () => {
      // Your animation logic here
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <div className="developers">
        <div className="container-fluid">
          <AnimationTitles
            title="Configuration & Pricing"
            className="title mx-auto"
          />
          <p className="gray-50 text-center mb-5">
            The value of real estate can be affected by its utility, project,
            and demand.{" "}
          </p>

          <Swiper
            className="mySwiper overflow-none justify-content-start"
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              998: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide className="developer-slide">
              <motion.div
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-3">
                  <ul className="text-white1 m-0">
                    <b>
                      <li>2 BHK + 2T</li>
                      <li>1285 Sft</li>
                      <li>1.29 Cr Onwards*</li>
                    </b>
                  </ul>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="developer-slide">
              <motion.div
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-3">
                  <ul className="text-white1 m-0">
                    <b>
                      <li>3 BHK + 2T</li>
                      <li>1700 Sq.ft</li>
                      <li>1.69 Cr Onwards*</li>
                    </b>
                  </ul>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="developer-slide">
              <motion.div
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-3">
                  <ul className="text-white1 m-0">
                    <b>
                      <li>3 BHK + 3T</li>
                      <li>2025 Sq.ft</li>
                      <li>1.99 Cr Onwards*</li>
                    </b>
                  </ul>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="developer-slide">
              <motion.div
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-3">
                  <ul className="text-white1 m-0">
                    <b>
                      <li>3 BHK + Servant Room</li>
                      <li>2470 Sq.ft</li>
                      <li>2.45 Cr Onwards*</li>
                    </b>
                  </ul>
                </Card>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="developer-slide">
              <motion.div
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-3">
                  <ul className="text-white1 m-0">
                    <b>
                      <li>4 BHK + Servant </li>
                      <li>2898 Sft</li>
                      <li>2.96 Cr Onwards*</li>
                    </b>
                  </ul>
                </Card>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

export default Developers;
