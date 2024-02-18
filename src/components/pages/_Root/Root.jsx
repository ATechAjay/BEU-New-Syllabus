import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import style from "./Root.module.css";

const Root = () => {
  return (
    <>
      <main className={style.main}>
        <header>
          <Navbar />
        </header>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
