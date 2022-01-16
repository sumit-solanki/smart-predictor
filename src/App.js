import "./App.scss";
import Home from "./Home";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Header from "./Header";
import Summary from "./Home/Summary";
import Details from "./Home/Details";

function App() {
  return (
    <div className="App">
      <div className="grid-layout">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/summary" element={<Summary />} />
            <Route path="/detail" element={<Details />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
