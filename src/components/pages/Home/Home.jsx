import Card from "../../Card/Card";
import Heading from "../../Card/Heading/Heading";
import style from "./Home.module.css";
const Home = (props) => {
  const newCard = props.cardData;
  //   console.log(newCard);
  return (
    <div className={style["home-container"]} id="syllabus">
      <div className={`${"container " + style["home-content-container"]}`}>
        <Heading heading={props.heading} />
        <div className={style["home-circular-grid"]}>
          {newCard.map((card) => {
            return (
              <Card
                key={Math.random()}
                path={card.path}
                courseImage={card.cardImage}
                courseName={card.cardName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
