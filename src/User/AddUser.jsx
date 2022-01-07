import React, { useState } from "react";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUserName, setUserName] = useState("");
  const [enterAge, setAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length == 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter name and age correctly",
      });
      return;
    } else if (+enterAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age should be valid (>0)",
      });
      return;
    } else {
      props.onAddUser(enterUserName, enterAge);
      setUserName("");
      setAge("");
    }
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Username</label>
          <input
            name="userName"
            type="text"
            value={enterUserName}
            onChange={userNameHandler}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            name="age"
            type="number"
            onChange={ageHandler}
            value={enterAge}
          ></input>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
