import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Apps = () => {
  return (
  <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
  )
};

export default Apps;
