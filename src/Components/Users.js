import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, searchUser } from '../actions/userActions';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userReducer.users);
  const searchResult = useSelector(state => state.userReducer.searchResult);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (!users) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  const handleSearch = (e) => {
    const name = e.target.value;
    dispatch(searchUser(name));
  };
  /*return(
    <div> User API component </div>
  );*/


  return (
    <div>
      <h2>Users</h2>
      <input type="text" placeholder="Search user" onChange={handleSearch} />
      <div>{searchResult}</div>
      <ul>
        {users.map(user => (
          <li key={user.userId}>{user.userName} - {user.userAddress}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
