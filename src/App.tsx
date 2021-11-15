import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {userService} from "./service";
import {User} from "./domain/User";

const App = () => {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const findRandomUser = async () => setCurrentUser(await userService.findRandomUser())
    findRandomUser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <p>
        Name: {currentUser?.name} <br/>
        Last Name: {currentUser?.lastName} <br/>
        Email: {currentUser?.email} <br/>
        Phone Number: {currentUser?.phoneNumber} <br/>
      </p>
    </div>
  );
}

export default App;