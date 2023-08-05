import style from "./Error.module.css";
const Error = () => {
  return (
    <div className={style["error-container"]}>
      <h1>❌Something went wrong❌</h1>
      <p>Page not found.☹️</p>
    </div>
  );
};

export default Error;
