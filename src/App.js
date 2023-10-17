import React from 'react';
import { UserForm } from './components/users/user-form/UserForm';
import { UserList } from './components/users/user-list/UserList';

function App() {
  const userListData = [
    {
      id: 1,
      name: 'Alif Razan Saputra',
      birthDate: new Date('1997-10-09'),
      gender: 'M'
    },
    {
      id: 2,
      name: 'Ai Nurrohmat',
      birthDate: new Date('1993-09-01'),
      gender: 'F'
    },
    {
      id: 3,
      name: 'Rizky Ramadhan Saputra',
      birthDate: new Date('2007-08-23'),
      gender: 'M'
    }
  ]


  return (
    <React.Fragment>
      <UserForm />
      <UserList users={userListData}/>
    </React.Fragment>

  );
}

export default App;
