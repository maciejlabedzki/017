import React from "react";

export const AccordionItem = function(props) {
  const style = {
    collapsed: {
      display: "none"
    },
    expanded: {
      display: "block"
    },
    buttonStyle: {
      display: "block",
      width: "100%"
    }
  };

  return (
    <div>
      <button style={style.buttonStyle} onClick={() => props.handleClick()}>
        {props.label}
      </button>
      <div
        className="collapse-content"
        style={props.isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={props.isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
};

function Accordion(props) {
  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);

  const changeItem = itemIndex => {
    if (typeof props.onItemClick === "function") props.onItemClick(itemIndex);
    if (itemIndex !== bindIndex) setBindIndex(itemIndex);
  };
  const items = props.children.filter(
    item => item.type.name === "AccordionItem"
  );

  return (
    <div className="wrapper">
      {items.map(({ props }) => (
        <AccordionItem
          key={"id_accordion_" + props.index}
          isCollapsed={bindIndex !== props.index}
          label={props.label}
          handleClick={() => changeItem(props.index)}
          children={props.children}
        />
      ))}
    </div>
  );
}

export default Accordion;
