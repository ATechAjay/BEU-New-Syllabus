import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import style from "./Root.module.css";

const Root = () => {
  return (
    <>
      <header className={style.main}>
        <Navbar />
        <Outlet />
      </header>
      <Footer />
    </>
  );
};

export default Root;
