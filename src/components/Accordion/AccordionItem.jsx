import Accordion from "react-bootstrap/Accordion";
import style from "./AccordionItem.module.css";
import Heading from "../Card/Heading/Heading";
const AccordionItem = (props) => {
  const { title, body, heading } = props;

  return (
    <div className={style["accordion-item"]}>
      <Heading heading={heading} />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionItem;
