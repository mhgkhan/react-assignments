import React, { useState } from "react";

const TableAssignment = () => {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    address: "",
  });

  const [users, setUsers] = useState([]);

  const changeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    let prevusers = users;
    prevusers.push(inputs);
    setUsers(prevusers);
    setInputs({
      name: "",
      age: "",
      address: "",
    });
  };

  return (
    <div className="tableassignment">
      <h1>Enter data </h1>
      <form action="#" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={changeInput}
          value={inputs.name}
          name="name"
          required
        />
        <input
          type="text"
          placeholder="enter age"
          onChange={changeInput}
          value={inputs.age}
          name="age"
          required
        />
        <input
          type="text"
          placeholder="enter address"
          onChange={changeInput}
          value={inputs.address}
          name="address"
          required
        />
        <button type="submit">Add Now </button>
      </form>

      <br />
      <br />
      <br />

      
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableAssignment;
