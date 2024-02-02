
import { Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import "./Properties.css"

function Properties() {
  // Active on select a tab
  function active(e) {
    let act = document.querySelectorAll(".active");
    act[0].classList.remove("active");
    e.target.classList.add("active");
  }

  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    // Start properties
    <div className="properties">
      <Container>
        <AnimationTitles
          className="title mx-auto"
          title="Elevation Gallery"
        />
        {/* Start tabs */}
        <div className="tabs d-flex justify-content-start justify-content-sm-center align-items-center flex-nowrap w-lg-50">
          <Swiper
            className="mySwiper overflow-none"
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
          
          </Swiper>
        </div>
        {/* End tabs */}
        {/* Start cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/build.jpg")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                 
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
            {" "}
            <Card className="bg-black-100 rounded">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/properties/build1.jpg")}
                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
               
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/build2.jpg")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                 
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/build3.jpg")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                 
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/build4.jpg")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                 
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/build.jpg")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                 
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/build1.jpg")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                 
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/build2.jpg")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                 
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    // End properties
  );
}

export default Properties;
