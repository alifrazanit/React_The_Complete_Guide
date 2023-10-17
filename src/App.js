import React, { useState } from "react";
import { UserForm } from "./components/users/user-form/UserForm";
import { UserList } from "./components/users/user-list/UserList";

const INIT_DATA = [
  {
    id: 1,
    name: "Alif Razan Saputra",
    birthDate: new Date("1997-10-09"),
    gender: "M",
  },
  {
    id: 2,
    name: "Ai Nurrohmat",
    birthDate: new Date("1993-09-01"),
    gender: "F",
  },
  {
    id: 3,
    name: "Rizky Ramadhan Saputra",
    birthDate: new Date("2007-08-23"),
    gender: "M",
  },
];

function App() {
  const [userListData, setUserListData] = useState(INIT_DATA);

  const onSubmitForm = (user) => {
    setUserListData((prev) => [...prev, user])
  };
  
  return (
    <React.Fragment>
      <UserForm onSubmitFormEvent={onSubmitForm} />
      <UserList users={userListData} />
    </React.Fragment>
  );
}

export default App;
