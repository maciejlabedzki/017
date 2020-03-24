import React from "react";

const SearchForm = props => {
  const clearForm = e => {
    props.clearInputs();
    e.preventDefault();
    document.getElementById("app-form__search-match").reset();
  };

  const handleClearInput = e => {
    const element = e.target.getAttribute("parent");
    document.getElementsByName(element)[0].value = "";
    document.getElementsByName(element)[0].innerHTML = "";
    document.getElementsByName(element)[0].placeholder = "";
    document.getElementById("app-form__search-match").reset();
  };

  // handleValidataionYearCheckbox = () => {
  //   let mustBeTitleCheckbox = props.state.searchAllTitleCheckbox;
  //   if (mustBeTitleCheckbox === true) {
  //   }
  // };

  return (
    <div className="app-container app_search-form">
      {/* {props.state.searchCurrentCheckbox} */}
      {!props.state.offlineJson && (
        <form id="app-form__search-match" className="header">
          <p className="app-container__search--match-title">
            <label>Match Title:</label>

            <input
              name="searchMatchTitleCheckbox"
              parent="searchMatchTitleInput"
              onClick={handleClearInput}
              onChange={props.updateCheckbox}
              checked={props.state.searchMatchTitleCheckbox}
              type="checkbox"
            />

            <input
              name="searchMatchTitleInput"
              placeholder={props.state.searchMatchTitleInput}
              onChange={props.updateInputs}
              disabled={!props.state.searchMatchTitleCheckbox}
            />
          </p>

          <p className="app-container__search--match-year">
            <label>with year:</label>

            <input
              name="searchMatchYearCheckbox"
              parent="searchMatchYearInput"
              onClick={handleClearInput}
              onChange={props.updateCheckbox}
              checked={props.state.searchMatchYearCheckbox}
              type="checkbox"
              disabled={props.state.searchDisableYearCheckbox}
            />
            <input
              name="searchMatchYearInput"
              placeholder={props.state.searchMatchYearInput}
              onChange={props.updateInputs}
              disabled={!props.state.searchMatchYearCheckbox}
            />
          </p>

          <hr />

          <p className="app-container__search--match-id">
            <label>Match ID:</label>
            <input
              name="searchMatchIdCheckbox"
              onChange={props.updateCheckbox}
              parent="searchMatchIdInput"
              onClick={handleClearInput}
              checked={props.state.searchMatchIdCheckbox}
              type="checkbox"
            />
            <input
              name="searchMatchIdInput"
              placeholder={props.state.searchMatchIdInput}
              onChange={props.updateInputs}
              disabled={!props.state.searchMatchIdCheckbox}
            />
          </p>

          <hr />

          <p className="app-container__search--all">
            <label>Search:</label>
            <input
              name="searchAllTitleCheckbox"
              onChange={props.updateCheckbox}
              parent="searchAllTitleInput"
              onClick={handleClearInput}
              checked={props.state.searchAllTitleCheckbox}
              type="checkbox"
            />
            <input
              name="searchAllTitleInput"
              placeholder={props.state.searchAllTitleInput}
              onChange={props.updateInputs}
              disabled={!props.state.searchAllTitleCheckbox}
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
            className="app-button app-button__confirm"
            onClick={props.toggleOfflineJson}
            attr-state={JSON.stringify(props.state.offlineJson)}
          >
            Run offline
          </button>
        </form>
      )}

      {props.state.offlineJson && (
        <React.Fragment>
          <div id="app-form__search-match" className="header">
            <button
              className="app-button app-button__search"
              name="search"
              onClick={props.jsonApi}
            >
              Show Offline Example
            </button>
            <button
              className="app-button app-button__confirm"
              onClick={props.toggleOfflineJson}
              attr-state={JSON.stringify(props.state.offlineJson)}
            >
              Run online
            </button>
          </div>
          <div className="app-container__alert alert-warning fadeOut animated delay-5s">
            SEARCH OFFLINE!
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default SearchForm;
