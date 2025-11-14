import {Routes, Route,} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import HookUseState from './hook/HookUseState';
import HookUseEffect from './hook/HookUseEffect';
import HookUseRef from './hook/HookUseRef';
import HookUseReduce from './hook/HookUseReduce';

import './App.scss';

const App = () => {
  
  return (  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hook-usestate" element={<HookUseState />} />
      <Route path="/hook-useeffect" element={<HookUseEffect />} />
      <Route path="/hook-useref" element={<HookUseRef />} />
      <Route path="/hook-usereduce" element={<HookUseReduce />} />
    </Routes>
  );
}
 
export default App;