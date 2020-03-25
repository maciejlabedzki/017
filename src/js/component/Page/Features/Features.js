import React from "react";

import StarRating from "./../../../util/features/starRating";
import Tooltip from "./../../../util/features/tooltip";
import Loader from "./../../../util/features/loader";
import FileDrop from "./../../../util/features/filedrop";

// Carousel
import Carousel from "./../../../util/features/carousel";
import img_1 from "./../../../../assets/img/carousel/img_1.jpg";
import img_2 from "./../../../../assets/img/carousel/img_2.jpg";
import img_3 from "./../../../../assets/img/carousel/img_3.jpg";

// Collapse
import Collapse from "./../../../util/features/collapse";

// Tabs
import Tabs, { TabItem } from "./../../../util/features/tabs";

class StructureTemplete extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          <ul className="app-container-features__list">
            <li>
              <label className="app-container__title">Stars</label>
              <StarRating />
            </li>
            <hr></hr>
            <li>
              <label className="app-container__title">Tooltip</label>

              <Tooltip text="Simple tooltip">
                <button className="app-button">Hover me!</button>
              </Tooltip>
            </li>
            <hr></hr>
            <li>
              <label className="app-container__title">Loader</label>

              <Loader size={24} />
            </li>
            <hr></hr>
            <li>
              <label className="app-container__title">File Drop</label>

              <FileDrop handleDrop={console.log} />
            </li>
            <hr></hr>
            <li>
              <label className="app-container__title">Carousel</label>
              <Carousel
                carouselItems={[
                  <div key="id-carousel-1" className="app-carousel__item">
                    <img src={img_1} alt="poster carousel 1" />
                    carousel item 1
                  </div>,
                  <div key="id-carousel-2" className="app-carousel__item">
                    <img src={img_2} alt="poster carousel 2" />
                    carousel item 2
                  </div>,
                  <div key="id-carousel-3" className="app-carousel__item">
                    <img src={img_3} alt="poster carousel 3" />
                    carousel item 3
                  </div>
                ]}
              />
            </li>
            <hr></hr>
            <li>
              <label className="app-container__title">Collapse</label>
              <Collapse>
                <h1>This is a collapse</h1>
                <p>Hello world!</p>
              </Collapse>
            </li>
            <li>
              <label className="app-container__title">Tabs</label>
              <Tabs defaultIndex="1" onTabClick={console.log}>
                <TabItem label="A" index="1">
                  Lorem ipsum
                </TabItem>
                <TabItem label="B" index="2">
                  Dolor sit amet
                </TabItem>
              </Tabs>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default StructureTemplete;
