import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/partials/Layout";
import LoginPage from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UserContextProvider from "./context/UserContext";

const HomePage = lazy(() => import("./pages/home/index"));
const ReviewPage = lazy(() => import("./pages/review/Review"));
const DeptPage = lazy(() => import("./pages/department/Department"));
const UsersPage = lazy(() => import("./pages/users/Users"));
const HistoryPage = lazy(() => import("./pages/history/History"));

const App = () => {
  const user = localStorage.getItem("userInfo");

  return (
    <UserContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {user ? (
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/department" element={<DeptPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
      </Suspense>
    </UserContextProvider>
  );
};

export default App;
