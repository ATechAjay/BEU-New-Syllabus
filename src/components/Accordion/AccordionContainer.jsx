import Heading from "../Card/Heading/Heading";
import AccordionItem from "./AccordionItem";
import style from "./AccordionContainer.module.css";
const AccordionContainer = (props) => {
  return (
    <div className={style["accordion-container"]}>
      <Heading heading={props.heading} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
      <AccordionItem title={props.title} body={props.body} />
    </div>
  );
};

export default AccordionContainer;
