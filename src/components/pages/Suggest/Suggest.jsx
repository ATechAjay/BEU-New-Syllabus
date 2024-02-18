import style from "./Suggest.module.css";
const Suggest = () => {
  return (
    <div className={style.suggestContainer}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdbuHUcxHgIpA_HXKRszqJ2b5hE5LmVc5g8N3OWS4shpeU-yQ/viewform?embedded=true">
        Loading…
      </iframe>
    </div>
  );
};

export default Suggest;
