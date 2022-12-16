import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:3080/users');
    setUsers(response.data);
  }

  const deleteUser = async (id) =>{
    try {
      await axios.delete(`http://localhost:3080/users/${id}`)
      getUsers();
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
      <h1 className='is-size-1 mb-3 has-text-weight-bold'>List Registered User</h1>

        <Link to={`add`} className='button is-success'>Add New</Link>
        <table className='table is-stripped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>
                  <Link 
                  to={`edit/${user.id}`}
                  className='button is-small is-info'
                  >
                    Edit
                  </Link>
                  <button 
                  className='button is-small is-danger'
                  onClick={()=> deleteUser(user.id)}
                  >
                    Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList