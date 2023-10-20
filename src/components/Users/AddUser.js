import moduleCss from "./AddUser.module.css";

export const AddUser = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className={moduleCss["input"]}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="username">Age (Years)</label>
      <input id="username" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};
