import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const Root = () => {
  return (
    <header>
      <Navbar />
      <Outlet />
    </header>
  );
};

export default Root;
