import React from 'react';

const InputField = ({ text, handleInput, handleSubmit }) => (
  <label>
    <input value={text} onChange={(e) => handleInput(e.target.value)}></input>
    <button onClick={handleSubmit}>Add Todoo</button>
  </label>
);

export default InputField;
