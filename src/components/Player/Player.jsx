import { useState } from "react";
export const Player = ({ name, sysmbol }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState("");

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
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{sysmbol}</span>
      </span>
      <button onClick={onEdit}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
};
