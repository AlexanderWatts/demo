import React, { FC, ReactNode, useEffect, useState } from "react";
import User from '../types/User';

const User:FC<{ id:number }> = ({ id }) => {
  const [user, setUser] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const response = await fetch(`http://localhost:9000/users/${id}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {
        user.length > 0 ? 
        user.map(({ id, name, age }: User, key): ReactNode => (
          <div key={key}>
            <h1 key={key}>User</h1>
            <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Age: {age}</p>
          </div>
        ))
        : <h1>No user with id of {id} exists</h1>
      }
    </>
  )
};

export default User;
