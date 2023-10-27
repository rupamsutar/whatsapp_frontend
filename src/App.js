import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

function App() {
  const {user} = useSelector(store => store.user);
  const {token} = user;
  return (
    <div className="dark">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={token ? <Home /> : <Navigate to='/login' />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/register' element={!token ? <Register /> : <Navigate to='/' />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
