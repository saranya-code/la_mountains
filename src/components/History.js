import React from "react";
import historyTitle from "../images/historyTitle.png";
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";


function History() {
  return (
    <>
    
      <div className="history-bg">
        <div className="content-center pt-5">
          <div>
            <img src={historyTitle} alt="historyTitle" />
          </div>
          <div className="pl-5 pt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <div className="slider">
          <div className="content-center pt-5 pb-5">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* <!-- Indicators --> */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              {/* <!-- Wrapper for slides --> */}
              <div className="carousel-inner">
                <div className="item active">
                  <img src={slider1} alt="Los Angeles" />
                  <img src={slider2} alt="Los Angeles" />
                  <img src={slider1} alt="Los Angeles" />
                  <img src={slider2} alt="Los Angeles" />
                </div>

                <div className="item">
                  <img src={slider1} alt="Los Angeles" />
                  <img src={slider2} alt="Los Angeles" />
                  <img src={slider1} alt="Los Angeles" />
                  <img src={slider2} alt="Los Angeles" />
                </div>

                <div className="item">
                  <img src={slider1} alt="Los Angeles" />
                  <img src={slider2} alt="Los Angeles" />
                  <img src={slider1} alt="Los Angeles" />
                  <img src={slider2} alt="Los Angeles" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default History;
