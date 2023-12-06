import logo from './logo.svg';
import './App.css';
// import Btn from './comp/exe4'
// import School from './comp/show4'
// import Login from './comp/show42'
import { useEffect, useState } from 'react';
// import CustomHook from './comp/use/use11';
// import ToDoComp from './comp/ToDoTask/ToDo';
// import StudentLogin from './comp/Login1';
// import Profile from './comp/Profile';
// import Card from './lesson _redux/compLes8/Card';
// import Game from './lesson _redux/compLes8/GameBoard';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './React_Route/Home';
import Books from './React_Route/book';
import IdBooks from './React_Route/idBooks';

function App() {
  return (
    <>
      <nav>
        <Link to="/">home</Link><br />
        <Link to="/book">book</Link><br />
      </nav>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/book" element={<Books />}>

            <Route path=":id" element={<IdBooks />} />

          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
