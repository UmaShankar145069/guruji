import React, { useRef, useState } from "react";
// import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperCard.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                I have been using this service from quiet long but recently with
                Covid scenario it became super helpful with Dr. Jyoti ji's
                consultation.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-1.png" alt="image" />
                </div>
                <span>Jyoti ji's </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                The counseling happened really well interactive where Dr Jyoti
                ji listened to me very patiently the way I was expecting and
                found her really very approachable.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-2.png" alt="image" />
                </div>
                <span>Ravi Kishan</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Guruji is giving the best platform for resolving the diseased
                state of any patient and having a direct way to talk with their
                ayurveda professional experts.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-3.jpg" alt="image" />
                </div>
                <span>Mayang</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                I have been using this service from quiet long but recently with
                Covid scenario it became super helpful with Dr. Jyoti ji's
                consultation.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-4.png" alt="image" />
                </div>
                <span>Abhay Singh</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                I have been using this service from quiet long but recently with
                Covid scenario it became super helpful with Dr. Jyoti ji's
                consultation.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-5.png" alt="image" />
                </div>
                <span>Abhay Kumar</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-1.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-2.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayuveda-3.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-4.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-5.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-1.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review-card">
            <div className="card">
              <div className="text">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </div>
              <div className="name-pic">
                <div className="img">
                  <img src="/images/ayurveda-2.png" alt="image" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default SwiperCard;
