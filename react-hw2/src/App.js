// import { useEffect, useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';


function App() {
  
  return (
    <div>
      <section className="todoapp">
        <ToDo></ToDo>
        
      </section>

      <footer className="info">
        <p>Click to edit a todo no available yet</p>
        <p>Homework <a href="http://localhost:3000/">Furkan Özkan</a></p>
        <p>Part of <a href="http://localhost:3000/">ToDo</a></p>
      </footer>
    </div>
  );
}

export default App;
