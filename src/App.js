import "./App.css";
import Footer from "./Components/FooterArea/Footer";
import Menu from "./Components/HeaderArea/Menu";
import TopHeader from "./Components/HeaderArea/TopHeader";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <TopHeader></TopHeader>
      <Menu></Menu>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
