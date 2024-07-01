import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import style from "./Root.module.css";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
