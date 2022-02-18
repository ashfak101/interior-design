import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartHome from "./components/CoursePage/CartHome";
import CourseHome from "./components/CoursePage/CourseHome";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./context/AuthProvider";
import DataProvider from "./context/DataProvider";
import { useState } from "react";

import Quizz from "./components/Quizz/Quizz";
import CheckOutHome from "./components/CoursePage/CheckOutHome";

import BlogsHome from "./components/Blogs/BlogsHome";
import Results from "./components/Quizz/Results";
function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <AuthProvider>
      <DataProvider>
        <div>
          <BrowserRouter>
            {/* <ScrollToTop /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/quiz" element={<Quizz />} />
              <Route path="/checkout" element={<CheckOutHome />} />
              <Route path="/results" element={<Results />} />
              <Route path="/blogs" element={<BlogsHome />} />
              <Route
                path="/courseHome/:id"
                element={<CourseHome cart={cart} setCart={setCart} />}
              >
                {" "}
              </Route>
              <Route path="/cart" element={<CartHome />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
