import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CourseHome from "./components/CoursePage/CourseHome";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./context/AuthProvider";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/courseHome/:id" element={<CourseHome />}>
                {" "}
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
