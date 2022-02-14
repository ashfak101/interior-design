import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartHome from "./components/CoursePage/CartHome";
import CourseHome from "./components/CoursePage/CourseHome";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./context/AuthProvider";
import DataProvider from "./context/DataProvider";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <AuthProvider>
      <DataProvider>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/courseHome/:id"
                element={<CourseHome cart={cart} setCart={setCart} />}
              >
                {" "}
              </Route>
              <Route
                path="/cart"
                element={<CartHome cart={cart} setCart={setCart} />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
