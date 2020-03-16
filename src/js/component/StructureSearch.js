import React from "react";

const StructureSearch = props => {
  const clearForm = e => {
    props.clearInputs();
    e.preventDefault();
    document.getElementById("FormMatchSearch").reset();
  };

  return (
    <div className="app_container">
      {!props.state.offlineJson && (
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

          <p>OR:</p>
          <p>
            <label>Search:</label>
            <input
              name="searchAllTitleInput"
              placeholder={props.state.searchAllTitleInput}
              onChange={props.updateInputs}
              disabled={!props.state.searchAllTitleCheckbox}
            />
            <input
              name="searchAllTitleCheckbox"
              onChange={props.updateCheckbox}
              checked={props.state.searchAllTitleCheckbox}
              type="checkbox"
            />
          </p>

          <button
            name="search"
            onClick={props.jsonApi}
            //disabled={props.state.searchMatchButton}
          >
            Search
          </button>
          <button onClick={clearForm}>Clear Form</button>
          <button
            onClick={props.toggleOfflineJson}
            attr-state={JSON.stringify(props.state.offlineJson)}
          >
            Run offline
          </button>
        </form>
      )}

      {props.state.offlineJson && (
        <React.Fragment>
          <div className="app_search_offline">SEARCH OFFLINE!</div>
          <form id="FormMatchSearch" className="header">
            <button name="search" onClick={props.jsonApi}>
              Search
            </button>
            <button
              onClick={props.toggleOfflineJson}
              attr-state={JSON.stringify(props.state.offlineJson)}
            >
              Run online
            </button>
          </form>
        </React.Fragment>
      )}
    </div>
  );
};

export default StructureSearch;
