import "./App.css";
import Login from "./Pages/Login";
import Navbar from "./Pages/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
