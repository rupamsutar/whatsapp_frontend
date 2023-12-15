import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import SocketContext from "./context/SocketContext";

// socket io
const socket = io(process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0]);


function App() {
  const { user } = useSelector((store) => store.user);
  const { token } = user;

  return (
    <div className="dark">
      <SocketContext.Provider value={socket}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={token ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              exact
              path="/login"
              element={!token ? <Login /> : <Navigate to="/" />}
            ></Route>
            <Route
              exact
              path="/register"
              element={!token ? <Register /> : <Navigate to="/" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
