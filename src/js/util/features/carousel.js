import React from "react";

function Carousel(props) {
  const [active, setActive] = React.useState(0);

  const style = {
    carousel: {
      position: "relative"
    },
    carouselItem: {
      position: "absolute",
      visibility: "hidden"
    },
    visible: {
      visibility: "visible"
    }
  };

  React.useEffect(() => {
    let scrollInterval = setTimeout(() => {
      const { carouselItems } = props;
      setActive((active + 1) % carouselItems.length);
    }, 2000);
    return () => {
      clearTimeout(scrollInterval);
    };
  });

  const { carouselItems, ...rest } = props;

  return (
    <div className="app-container-carousel clearfix" style={style.carousel}>
      {carouselItems.map((item, index) => {
        const activeStyle = active === index ? style.visible : {};
        return React.cloneElement(item, {
          ...rest,
          style: {
            ...style.carouselItem,
            ...activeStyle
          }
        });
      })}
    </div>
  );
}

export default Carousel;
