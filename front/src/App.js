import logo from "./logo.svg";
import "./App.css";
import UserTable from "./components/UserTable";
import Navbars from "./components/Navbars";
import { BrowserRouter } from "react-router-dom";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import Getimages from "./components/Getimages"
function App() {
  return (
    <div className="App">
      <Navbars />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <UserTable />
              </div>
            }
          />

          <Route path="/profile" element={<Profile/> } />
          

        </Routes>

      </BrowserRouter>
      <Getimages/>
    </div>
  );
}

export default App;
