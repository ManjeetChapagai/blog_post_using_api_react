import React, { useState, useEffect } from "react";
import { axios } from "../Api/axios";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`/users`);
    console.log(response.data);
    setUsers(response.data);
  };
  return (
    <div>
      {users.map(({ name, id, email, website, address }) => (
        <div key={id} className="user">
          <ul>
            <li style={{ fontWeight: "bolder" }}> {name} </li>
            <div className="inner-li">
              <li>Email: {email}</li>
              <li>City: {address.city}</li>
              <li>Website: {website} </li>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};
