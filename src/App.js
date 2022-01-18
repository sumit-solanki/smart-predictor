import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Summary from "./Home/Summary";
import Details from "./Home/Details";
import SuccessPage from "./Home/successPage";
import { useState } from "react";

function App() {
  const [userData,setUserData] = useState([])
  return (
    <div className="App">
      <div className="grid-layout">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/detail" element={<Details userData={userData} />} />
            <Route path="/successful" element={<SuccessPage />} />
            <Route path="/" element={<Summary setUserData={setUserData}  />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
