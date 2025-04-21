import React, { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => console.log("errror: ", error));
  }, [])

  useEffect(() => {
    console.log(users);
  }, [users])

  const filteredData = users ? users.filter((user) => {
    return user.name.toLowerCase().includes('a');
  }) : [];

  console.log(filteredData);
  return (
    <div className='App'>
      <h1>Users:</h1>
      {users ? (
        users.map((user, index) => (
          <div className='card' key={user + "_" + index}>
            <div className='card-inner'>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          </div>
        ))
      ) : (
        <div className='card'>
          <p>No Users Found</p>
        </div >
      )
      }
    </div >
  )
}

export default App