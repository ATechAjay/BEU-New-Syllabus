import Accordion from "react-bootstrap/Accordion";
import style from "./AccordionItem.module.css";
const AccordionItem = (props) => {
  return (
    <div className={style["accordion-item"]}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.title}</Accordion.Header>
          <Accordion.Body>{props.body}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionItem;
