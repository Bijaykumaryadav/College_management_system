import { useState, useEffect, useRef } from "react";
import { EnquireButton, ModalOverlay, ModalDiv } from "../styles/EnquireStyles";
import EnquireForm from "./EnquireForm"

const Enquire = () => {
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
      <EnquireButton
        modalstatus={modalstatus}
        onClick={() => setModalstatus(true)}
      >
        Enquiry Now
      </EnquireButton>
      <ModalOverlay
        className={modalstatus ? "modalShow" : ""}
      />
      <ModalDiv ref={modalRef} className={modalstatus ? "showModalDiv" : ""}>
        <h3>
          <EnquireForm /> <span onClick={closeModal}>&times;</span>
        </h3>
      </ModalDiv>
    </>
  );
};

export default Enquire;
