import "./Modal.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ setShow }) => {
  return (
    <div className="container-modal">
        <span className="icon-modal">
          <FontAwesomeIcon
            onClick={() => setShow(false)}
            className="icon-modal"
            icon={faXmark}
          />
        </span>
      <h2 className="title-modal">Gracias por tu interés.</h2>
      <p className="text-modal">
        Nos pondremos en contacto con usted en breve al correo electrónico que
        completó en el formulario.
      </p>
    </div>
  );
};
export default Modal;
