import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Components/Navbar";
import Contact from "./Contact";
import State from "./Pages/State";
import Toggle from "./Pages/Toggle";
import InputField from "./Pages/InputField";
import Like from "./Pages/Like";
import Api from "./Pages/Api";
import Users from "./Pages/Users";
import Recipes from "./Pages/Recipes";
import Carts from "./Pages/Carts";
import Input from "./Pages/Input";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route
          path="/about"
          element={
            <About
              name="Ranjan"
              email="ranjangowdadidupe@gmail.com"
              phone="9902476568"
              address="Didupe,Belthangady,Mangalore"
            />
          }
        />
        <Route
          path="/Contact"
          element={
            <Contact
              email="ranjangowdadidupe@gmail.com"
              address="Didupe,Belthangady,Mangalore"
              phone="9902476568"
            />
          }
        />
        <Route path="/state" element={<State />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/input" element={<InputField />} />
        <Route path="/like" element={<Like />} />
        <Route path="/api" element={<Api />} />
        <Route path="/users" element={<Users />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/form" element={<Input/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
