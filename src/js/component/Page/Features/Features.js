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
import Tabs, { TabItem } from "../../../util/features/tabs/tabs";

// Modal
import Modal from "../../../util/features/modal";

// Counter
import Counter from "../../../util/features/counter";

// LimitedWordTextarea
import LimitedWordTextarea from "../../../util/features/limitedWordTextarea";

import LimitedTextarea from "../../../util/features/limitedTextarea";

// TagInput
import TagInput from "../../../util/features/tag";

// Accordion
import Accordion, { AccordionItem } from "../../../util/features/accordion";

// ClickBox
import ClickBox from "../../../util/features/clickInside";

// Notification
import Notification from "../../../util/features/notification";

// ResponsiveText
import MediaQuery from "../../../util/features/mediaQuery";

// Timer
import Timer from "../../../util/features/timer";

// Online
import Online from "../../../util/features/online";

// ImageFetch
import ImageFetch from "../../../util/features/imageFetch";

// SSR Checker
import SSRChecker from "../../../util/features/useSSR";

// Use Async
import RandomImage from "../../../util/features/useAsync";

// Time out one second
import OneSecondTimer from "../../../util/features/timeout";

// Check if mounted
import Mounter from "../../../util/features/useMounted";

// Check if unmounted
import Unmounter from "../../../util/features/useUnmounted";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: "",
      sendNotification: false
    };
  }

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
            <li>
              <label className="app-container__title">Modal</label>
              <button
                className="app-button"
                onClick={() =>
                  this.setState({ isModal: true }, () => {
                    console.log(this.state);
                  })
                }
              >
                Click Here
              </button>
              <Modal
                isVisible={this.state.isModal}
                title="Modal Title"
                content={<p>Add your content here</p>}
                footer={
                  <button
                    onClick={() => {
                      alert("Nothing to do yet.");
                    }}
                  >
                    Cancel
                  </button>
                }
                onClose={() => this.setState({ isModal: false })}
              />
            </li>
            <li>
              <label className="app-container__title">Counter</label>
              <Counter />
            </li>

            <li>
              <label className="app-container__title">
                Limited Word Textarea
              </label>
              <LimitedWordTextarea limit={5} value="Hello there!" />
              <label className="app-container__title">Limited Textarea</label>
              <LimitedTextarea limit={32} value="Hello!" />
            </li>
            <li>
              <label className="app-container__title">Tag Input</label>
              <TagInput tags={["Action", "S-f"]} />
            </li>

            <li>
              <label className="app-container__title">Accordion</label>
              <Accordion defaultIndex="1" onItemClick={console.log}>
                <AccordionItem label="A" index="1">
                  Lorem ipsum
                </AccordionItem>
                <AccordionItem label="B" index="2">
                  Dolor sit amet
                </AccordionItem>
              </Accordion>
            </li>

            <li>
              <label className="app-container__title">ClickBox</label>
              <ClickBox onClickInside={() => alert("click inside")} />
            </li>
            <li>
              <label className="app-container__title">Notification</label>
              {this.state.sendNotification === false && (
                <button
                  onClick={() => this.setState({ sendNotification: true })}
                >
                  send notification
                </button>
              )}
              {this.state.sendNotification === true && (
                <Notification type="info" message="This is info" />
              )}
            </li>
            <li>
              <label className="app-container__title">
                Responsive Text By media query
              </label>
              <MediaQuery
                query="(max-width: 400px)"
                whenTrue="Less than 400px wide"
                whenFalse="More than 400px wide"
              />
            </li>
            <li>
              <label className="app-container__title">Timer</label>
              <Timer />
            </li>
            <li>
              <label className="app-container__title">Online</label>
              <Online />
            </li>
            <li>
              <label className="app-container__title">Image Fetch</label>
              <ImageFetch />
            </li>
            <li>
              <label className="app-container__title">
                A hook that checks if the code is running on the browser or the
                server.
              </label>
              <SSRChecker />
            </li>
            <li>
              <label className="app-container__title">
                Fetch random images
              </label>
              <RandomImage />
            </li>
            <li>
              <label className="app-container__title">Timer 1 sec</label>
              <OneSecondTimer />
            </li>
            <li>
              <label className="app-container__title">Check if mounted</label>
              <Mounter />
            </li>
            <li>
              <label className="app-container__title">Check if unmounted</label>
              <Unmounter />
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Features;
