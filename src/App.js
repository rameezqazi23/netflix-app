import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoutes from "./components/ProtectedRoutes";


function App() {
  return (
    <>

      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={
            <ProtectedRoutes>
              <Account />
            </ProtectedRoutes>
          } />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
