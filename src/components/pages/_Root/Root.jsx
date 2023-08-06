import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Root = () => {
  return (
    <header>
      <Navbar />
      <Outlet id={"syllabus"} />
      <Footer />
    </header>
  );
};

export default Root;
