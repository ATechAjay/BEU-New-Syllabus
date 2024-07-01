import style from "./Heading.module.css";

const Heading = (props) => {
  const { heading } = props;

  return <h1 className={style.heading + " mb-4 fs-4"}>{heading}</h1>;
};
export default Heading;
