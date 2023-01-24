import {Routes, Route, useNavigate} from 'react-router-dom'

import Home from "./container/Home";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home/*' element={<Home />} />
    </Routes>
  );
}

export default App;
