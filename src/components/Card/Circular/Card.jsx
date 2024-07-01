import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  // console.log(props);
  return (
    <div className={style["circle-container"]}>
      <Link className={style["circle-link"]} to={props.path}>
        <img
          className={style["link-img"]}
          src={props.courseImage}
          alt={props.courseName}
        />
        <span className={style["course-name"]}>{props.courseName}</span>
      </Link>
    </div>
  );
};
export default Card;
