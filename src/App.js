import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
