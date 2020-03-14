import React from "react";

const StructureSearch = props => {
  const clearForm = e => {
    props.clearInputs();
    e.preventDefault();
    document.getElementById("FormMatchSearch").reset();
  };

  return (
    <div className="app_container">
      <form id="FormMatchSearch" className="header">
        <p>
          <label>Match Title:</label>
          <input
            name="searchMatchTitleInput"
            placeholder={props.state.searchMatchTitleInput}
            onChange={props.updateInputs}
            disabled={!props.state.searchMatchTitleCheckbox}
          />

          <input
            name="searchMatchTitleCheckbox"
            onChange={props.updateCheckbox}
            checked={props.state.searchMatchTitleCheckbox}
            type="checkbox"
          />
        </p>

        <p>
          <label>Match Year:</label>
          <input
            name="searchMatchYearInput"
            placeholder={props.state.searchMatchYearInput}
            onChange={props.updateInputs}
            disabled={!props.state.searchMatchYearCheckbox}
          />
          <input
            name="searchMatchYearCheckbox"
            onChange={props.updateCheckbox}
            checked={props.state.searchMatchYearCheckbox}
            type="checkbox"
          />
        </p>

        <p>OR:</p>

        <p>
          <label>Match ID:</label>
          <input
            name="searchMatchIdInput"
            placeholder={props.state.searchMatchIdInput}
            onChange={props.updateInputs}
            disabled={!props.state.searchMatchIdCheckbox}
          />
          <input
            name="searchMatchIdCheckbox"
            onChange={props.updateCheckbox}
            checked={props.state.searchMatchIdCheckbox}
            type="checkbox"
          />
        </p>

        <button
          onClick={props.jsonApi}
          //disabled={props.state.searchMatchButton}
        >
          Search First Match
        </button>
        <button onClick={clearForm}>Clear Form</button>
      </form>
    </div>
  );
};

export default StructureSearch;
