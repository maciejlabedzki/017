// const updateInputs = e => {
//   if (e.target.getAttribute("name") === "searchMatchTitleInput") {
//     this.setState({
//       searchMatchTitleInput: e.target.value
//     });
//   }
//   if (e.target.getAttribute("name") === "searchMatchIdInput") {
//     let value = e.target.value;
//     if (value.length === 6) {
//       value = "tt0" + value;
//     }
//     if (value.length === 5) {
//       value = "tt00" + value;
//     }
//     if (value.length === 4) {
//       value = "tt000" + value;
//     }
//     if (value.length === 3) {
//       value = "tt0000" + value;
//     }
//     if (value.length === 2) {
//       value = "tt00000" + value;
//     }
//     if (value.length === 1) {
//       value = "tt000000" + value;
//     }
//     if (value.length === 0) {
//       value = "";
//     }
//     this.setState({
//       searchMatchIdInput: value
//     });
//   }
//   if (e.target.getAttribute("name") === "searchMatchYearInput") {
//     this.setState({
//       searchMatchYearInput: e.target.value
//     });
//   }
// };

// export default updateInputs;
