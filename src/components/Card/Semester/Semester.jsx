import style from "./Semester.module.css";
import { Link } from "react-router-dom";
const Semester = ({ semester }) => {
  return (
    <Link to={semester} className={style.semester_link}>
      <span>{semester}</span>
    </Link>
  );
};

export default Semester;
