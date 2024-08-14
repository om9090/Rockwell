import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/partials/Layout";
import LoginPage from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UserContextProvider from "./context/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import NotFound404 from "./components/NotFound404";

const HomePage = lazy(() => import("./pages/home/index"));
const ReviewPage = lazy(() => import("./pages/review/Review"));
const DeptPage = lazy(() => import("./pages/department/Department"));
const UsersPage = lazy(() => import("./pages/users/Users"));
const HistoryPage = lazy(() => import("./pages/history/History"));
const SummaryPage = lazy(() => import("./pages/summary/Summary"));

const App = () => {
  return (
    <UserContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route path="auth" element={<PrivateRoute />} >
              <Route path="home" element={<HomePage />} />
              <Route path="review" element={<ReviewPage />} />
              <Route path="department" element={<DeptPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="summary" element={<SummaryPage />} />
              <Route path="*" element={<NotFound404 />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        </Routes>
      </Suspense>
    </UserContextProvider>
  );
};

export default App;
