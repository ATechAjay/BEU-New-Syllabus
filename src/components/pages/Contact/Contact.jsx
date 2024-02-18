import Social from "./Social";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.form}>Form goes here...</h1>
      <Social />
    </div>
  );
};

export default Contact;
