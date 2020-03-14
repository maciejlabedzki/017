import React from "react";

const StructureSearch = props => {
  return (
    <div className="app_container">
      <form className="header">
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

        <button
          onClick={props.jsonApi}
          disabled={props.state.searchMatchButton}
        >
          Search First Match
        </button>
      </form>
    </div>
  );
};

export default StructureSearch;
