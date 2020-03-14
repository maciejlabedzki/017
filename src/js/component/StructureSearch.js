import React from "react";

const StructureSearch = ({
  state,
  updateInput,
  updateInputID,
  updateInputYear,
  updateMatchTitle,
  updateMatchID,
  updateMatchYear,
  jsonApi
}) => {
  return (
    <div className="app_container">
      <form className="header">
        <p>
          <label>Match Title:</label>
          <input
            dataid="movie"
            placeholder={state.input}
            onChange={updateInput}
          />
          <input onChange={updateMatchTitle} type="checkbox" />
        </p>

        <p>
          <label>Match ID:</label>
          <input placeholder={state.inputID} onChange={updateInputID} />
          <input onChange={updateMatchID} type="checkbox" />
        </p>

        <p>
          <label>Match Year:</label>
          <input placeholder={state.inputYear} onChange={updateInputYear} />
          <input onChange={updateMatchYear} type="checkbox" />
        </p>

        <button onClick={jsonApi}>OMDB Api</button>
      </form>
    </div>
  );
};

export default StructureSearch;
