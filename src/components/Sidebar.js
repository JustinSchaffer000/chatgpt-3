import React from "react";
import { arrayItems } from "../AIOptions";

const Sidebar = ({ setCurrentModel }) => {
  // const clearChat = () => {
  //   setChatLog([]);
  // };

  return (
    <aside className="sidemenu">
      <div className="modellabel">Model</div>
      <div className="models">
        <select
          className="modeloption"
          onChange={(e) => {
            // setCurrentModel(e.target.value);
            // clearChat();
          }}
        >
          {arrayItems.map((model, index) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
