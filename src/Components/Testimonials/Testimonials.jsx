import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Lilly</h3>
                  <span>Las Vegas, USA</span>
                </div>
              </div>
              <p>
                Eduworld University's exceptional resources and supportive
                atmosphere made my learning journey remarkable. The faculty's
                dedication and vibrant campus culture are unparalleled. I highly
                recommend Eduworld for aspiring students.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Pablo Picasso</h3>
                  <span>Madrid, Spain</span>
                </div>
              </div>
              <p>
                Eduworld University offers an enriching environment. The
                dedicated faculty, modern facilities, and vibrant community made
                my academic journey exceptional. I highly recommend Eduworld for
                an outstanding educational experience.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Marie Curie</h3>
                  <span>Rome, Italy</span>
                </div>
              </div>
              <p>
                Eduworld University's exceptional resources and supportive
                atmosphere made my learning journey remarkable. The faculty's
                dedication and vibrant campus culture are unparalleled. I highly
                recommend Eduworld for aspiring students.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Florida, USA</span>
                </div>
              </div>
              <p>
                Eduworld University offers an enriching environment. The
                dedicated faculty, modern facilities, and vibrant community made
                my academic journey exceptional. I highly recommend Eduworld for
                an outstanding educational experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
