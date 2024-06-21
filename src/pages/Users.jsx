import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then ((res)=>res.json())
    .then ((data)=>  setUsers(data));
  },[users]);
  function deleteUser(id){
  axios.delete(`https://jsonplaceholder.typicode.com/users/delete${id}`);
  }
  const showUsers = users.map((user,index)=>  <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      style={{ cursor: "pointer" }}
                    />{" "}
                    &nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteUser(user.id)}
                    />
                  </td>
                </tr> )
  return (
   
      <div>
        <div style={{ padding: "20px" }}>
          <table>
            <thead>
              <th>Id</th>
              <th>User</th>
              <th>Email</th>
              <th>Action</th>
            </thead>
            <tbody>
              {showUsers}
            </tbody>
          </table>
        </div>
      </div>
  
  )
}

export default Users

