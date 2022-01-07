import React, { useState } from "react";
import AddUser from "./User/AddUser";
import UserList from "./User/UserList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserhandler = (uName, uAge) => {
    setUsersList((previousList) => {
      return [...previousList, { name:uName, age:uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserhandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
