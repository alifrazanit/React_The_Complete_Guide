import { useState } from "react";
export const Player = ({ name, sysmbol, isActive }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  const onChangeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  const onEdit = (e) => {
    setIsEdit((editing) => !editing);
  };

  if (isEdit) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={onChangeHandler}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{sysmbol}</span>
      </span>
      <button onClick={onEdit}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
};
