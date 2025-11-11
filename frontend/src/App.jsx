import { useState, useEffect } from "react";
import axios from "axios";

import Tasks from "./components/Tasks.jsx";
import Sidebar from "./components/Sidebar.jsx";

import './App.scss';



const App = () => {
  
  return (  
    <div className="app-container">
    <Sidebar />
    <Tasks />
    </div>
  );
}
 
export default App;