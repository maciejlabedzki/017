import React from "react";

function LimitedTextarea({ rows, cols, value, limit }) {
  const [content, setContent] = React.useState(value);

  const setFormattedContent = text => {
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
  };

  React.useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <div className="app-textarea">
      <textarea
        rows={rows}
        cols={cols}
        onChange={event => setFormattedContent(event.target.value)}
        value={content}
      />
      <p>
        {content.length}/{limit}
      </p>
    </div>
  );
}

// class LimitedTextarea extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: props.value
//     };
//   }

//   setFormattedContent = e => {
//     let text = e.target.value;
//     console.log(e.target.value, text, text.length, this.props.limit);
//     if (text.length > this.props.limit) {
//       this.setState({ content: text.slice(0, 11) });
//       console.log("11");
//     } else {
//       this.setState({ content: text });
//       console.log("22");
//     }
//   };

//   render() {
//     return (
//       <div className="app-textarea">
//         <textarea
//           rows={this.props.rows}
//           cols={this.props.cols}
//           onChange={this.setFormattedContent}
//           maxLength={this.props.limit}
//           value={this.props.content}
//           placeholder={this.props.content}
//         />
//         <p>
//           {this.state.content}
//           {this.state.content.length}/{this.props.limit}
//         </p>
//       </div>
//     );
//   }
// }

export default LimitedTextarea;
