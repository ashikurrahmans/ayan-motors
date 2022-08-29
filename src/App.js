import "./App.css";
import Footer from "./Components/FooterArea/Footer";
import Menu from "./Components/HeaderArea/Menu";
import TopHeader from "./Components/HeaderArea/TopHeader";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/404NotFound/NotFound";
import FindUsPage from "./Components/Findus/FindUsPage";
import TestimonialsPage from "./Components/Testimonials/TestimonialsPage";
import StockListPage from "./Components/stocklist/StockListPage";

function App() {
  return (
    <>
      <TopHeader></TopHeader>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/find-us" element={<FindUsPage></FindUsPage>} />
        <Route path="/stocklist" element={<StockListPage />} />
        <Route
          path="/testimonials"
          element={<TestimonialsPage></TestimonialsPage>}
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
