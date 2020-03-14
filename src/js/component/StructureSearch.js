import React from "react";

const StructureSearch = props => {
  console.log("aa", props);
  return (
    <div className="app_container">
      <form className="header">
        <p>
          <label>Match Title:</label>
          <input
            name="searchMatchTitleInput"
            placeholder={props.state.searchMatchTitleInput}
            onChange={props.updateInputs}
          />

          {/* <input
            onChange={props.searchMatchTitleInput}
            checked={props.state.searchMatchTitleCheckbox}
            type="checkbox"
          /> */}
        </p>

        <p>
          <label>Match ID:</label>
          <input
            name="searchMatchIdInput"
            placeholder={props.state.searchMatchIdInput}
            onChange={props.updateInputs}
          />
          {/* <input
            onChange={props.updateMatchID}
            checked={props.state.searchMatchIdCheckbox}
            type="checkbox"
          /> */}
        </p>

        <p>
          <label>Match Year:</label>
          <input
            name="searchMatchYearInput"
            placeholder={props.state.searchMatchYearInput}
            onChange={props.updateInputs}
          />
          {/* <input
            onChange={props.updateMatchYear}
            checked={props.state.searchMatchYearCheckbox}
            type="checkbox"
          /> */}
        </p>

        <button onClick={props.jsonApi}>OMDB Api</button>
      </form>
    </div>
  );
};

export default StructureSearch;
