// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To start, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import UserList from '../containers/user_list'

const App = () => (
  <div>
      <h2>Username List:</h2>
      <UserList />
      <hr/>
      <h2>User Details</h2>
  </div>
);

export default App;
