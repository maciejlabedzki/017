import React from "react";

const StructureSearch = ({ state, updateInput, updateInputID, jsonApi }) => {
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
        </p>

        <p>
          <label>Match ID:</label>
          <input placeholder={state.inputID} onChange={updateInputID} />
        </p>

        <button onClick={jsonApi}>OMDB Api</button>
      </form>
    </div>
  );
};

export default StructureSearch;
