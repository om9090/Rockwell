// App.js
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/partials/Layout";
import LoginPage from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UserContextProvider from "./context/UserContext";
import { Navigate } from "react-router-dom";
// import Proifle from "./pages/profile/Proifle";

// const HomePage = lazy(() => import("./pages/homePage"));
const HomePage = lazy(() => import("./pages/home/index"));

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<Navigate to="/register" replace />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" index element={<Register />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
