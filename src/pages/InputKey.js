import { useState } from "react";

const Input = ({ setApiKEY }) => {
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setApiKEY(value);
  };
  return (
    <div className="APIKEY-input-page">
      <label>OpenAI API_KEY</label>
      <div className="form-section">
        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        &nbsp;
        <button className="APIKEY-submit-button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Input;
