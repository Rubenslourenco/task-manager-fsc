import {Routes, Route,} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import HookUseState from './hook/HookUseState';

import './App.scss';

const App = () => {
  
  return (  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hook-usestate" element={<HookUseState />} />
    </Routes>
  );
}
 
export default App;