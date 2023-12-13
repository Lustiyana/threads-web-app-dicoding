import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Leaderboards from "./pages/LeaderboardsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/leaderboards" element={<Leaderboards/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/detail/:id" element={<DetailPage/>}/>
    </Routes>
  );
};

export default Router;
