import React from "react";

const SearchForm = props => {
  const clearForm = e => {
    props.clearInputs();
    e.preventDefault();
    document.getElementById("FormMatchSearch").reset();
  };

  return (
    <div className="app_container app_search-form">
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

          <hr />

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

          <hr />

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
            className="app-button"
            name="search"
            onClick={props.jsonApi}
            //disabled={props.state.searchMatchButton}
          >
            Search
          </button>
          <button className="app-button" onClick={clearForm}>
            Clear Form
          </button>
          <button
            className="app-button"
            onClick={props.toggleOfflineJson}
            attr-state={JSON.stringify(props.state.offlineJson)}
          >
            Run offline
          </button>
        </form>
      )}

      {props.state.offlineJson && (
        <React.Fragment>
          <div className="app_container alert-warning">SEARCH OFFLINE!</div>
          <form id="FormMatchSearch" className="header">
            <button name="search" onClick={props.jsonApi}>
              Show Offline Example
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

export default SearchForm;
