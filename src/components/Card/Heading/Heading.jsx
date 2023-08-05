import style from "./Heading.module.css";

const Heading = (props) => {
  //   console.log(props);
  return <h1 className={style.heading + " mb-4 fs-4"}>{props.heading}</h1>;
};
export default Heading;
