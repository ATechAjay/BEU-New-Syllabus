import style from "./Suggest.module.css";
import Social from "../Contact/Social";
const Suggest = () => {
  return (
    <div>
      <div className={style.suggestContainer}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdbuHUcxHgIpA_HXKRszqJ2b5hE5LmVc5g8N3OWS4shpeU-yQ/viewform?embedded=true">
          Loading…
        </iframe>
      </div>
      <Social />
    </div>
  );
};

export default Suggest;
