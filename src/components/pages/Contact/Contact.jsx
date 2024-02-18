import Social from "./Social";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <h1>Contact us form goes here...</h1>
      </div>
      <Social />
    </div>
  );
};

export default Contact;
