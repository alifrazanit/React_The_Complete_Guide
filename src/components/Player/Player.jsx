import { useState } from "react";
export const Player = ({ name, sysmbol }) => {
  const [isEdit, setIsEdit] = useState(false);
  let playerName = <span className="player-name">{name}</span>;

  const onEdit = (e) => {
    setIsEdit(!isEdit);
  };

  if (isEdit) {
    playerName = <input type="text" required value={name}/>;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{sysmbol}</span>
      </span>
      <button onClick={onEdit}>{isEdit ? 'Save' : 'Edit'}</button>
    </li>
  );
};
