import Heading from "../Card/Heading/Heading";
import style from "./SemesterContainer.module.css";
import Semester from "../Card/Semester/Semester";

const SemesterContainer = (props) => {
  return (
    <div className={style["accordion-container"]}>
      <Heading heading={props.heading} />

      <div className={style.semester_container}>
        <Semester semester="Semester-1" />
        <Semester semester="Semester-2" />
        <Semester semester="Semester-3" />
        <Semester semester="Semester-4" />
        <Semester semester="Semester-5" />
        <Semester semester="Semester-6" />
        <Semester semester="Semester-7" />
        <Semester semester="Semester-8" />
      </div>
    </div>
  );
};

export default SemesterContainer;
