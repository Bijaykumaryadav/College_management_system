import { useState, useRef, useEffect } from "react";
import {
  AdmissionButton,
  ModalOverlay,
  ModalDiv,
} from "../styles/EnquireStyles";
import AdmissionForm from "./AdmissionForm";

const Admission = () => {
  const [modalstatus, setModalstatus] = useState(false);
  const modalRef = useRef();

    const closeModal = () => {
      setModalstatus(false);
    };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (modalstatus) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalstatus]);


  return (
    <>
      <AdmissionButton
        modalstatus={modalstatus}
        onClick={() => setModalstatus(true)}
      >
        Admission Now
      </AdmissionButton>
      <ModalOverlay
        className={modalstatus ? "modalShow" : ""}
      />
      <ModalDiv ref={modalRef} className={modalstatus ? "showModalDiv" : ""}>
        <h3>
          <AdmissionForm /> <span onClick={closeModal}>&times;</span>
        </h3>
      </ModalDiv>
    </>
  );
};

export default Admission;
