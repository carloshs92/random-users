import React from 'react';
import './App.css';
import useDomain from './hooks/useDomain';
import { User } from './domain/User/IUser';

const App: React.FC = () => {
  const { data: users, isLoading, isError, run } = useDomain<User[]>({
    initState: [],
    initRun: async (domain) =>  await domain.getUsersUseCase()
  });

  const getNewUser = () => {
    run(async (domain) => await domain.getUsersUseCase());
  }
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="App">
      <div className="App__cards">
        {
          users.map((user: User) => (
            <div key={user.id} className={`App__card ${user?.active ? 'App__card--active' : ''}`}>
              <div data-testid="name"><b>Name:</b> {user?.name}</div>
              <div data-testid="lastName"><b>Last Name:</b> {user?.lastName}</div>
              <div data-testid="email"><b>Email:</b> {user?.email}</div>
              <div data-testid="phone"><b>Phone Number:</b> {user?.phoneNumber}</div>
            </div>
          ))
        }
      </div>
      <button className="App__button" onClick={getNewUser}>Get new user</button>
    </div>
  );
}

export default App;