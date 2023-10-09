import { Route, Routes } from "react-router-dom";
import { PostePage } from "../Pages";
import { HomePage } from "../Pages/HomePage";
import { ErrorPage } from "../Pages/404Page";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostePage />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
