import React, { FC, ReactNode, useEffect, useState } from "react";
import User from './User';

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:9000/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {
        users.map(({ id, name, age }: User):ReactNode => (
          <div>
            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Age: {age}</p>
          </div>
        ))
      }
    </>
  )
};

export default Users;
