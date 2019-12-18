import React from 'react';
import Header from './components/Header.js';
import Team from './components/Team.js';
import Services from './components/Services.js';
import TeamMember from './components/TeamMember.js'
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Services/>
      <Team/>
      <TeamMember />
    </div>
  );
}

export default App;
