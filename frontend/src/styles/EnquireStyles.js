import styled from "styled-components";

const ButtonBase = styled.button`
  position: fixed;
  right: -40px;
  transform: translateY(-50%) rotate(90deg);
  color: black;
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 1000;
`;

export const EnquireButton = styled(ButtonBase)`
  top: 50%;
  background-color: white;
  display: ${({ modalstatus }) =>
    modalstatus ? "none" : "block"}; // Hide the button when modal is shown
`;

export const AdmissionButton = styled(ButtonBase)`
  right: -50px;
  top: calc(50% + 150px); /* Adjust vertical positioning as needed */
  background-color: white;
  display: ${({ modalstatus }) =>
    modalstatus ? "none" : "block"}; // Hide the button when modal is shown
`;

export const ModalOverlay = styled.div`
  width: 100%;
  position: fixed;
  display: none;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  &.modalShow {
    display: block;
  }
`;

export const ModalDiv = styled.div`
  position: fixed;
  right: 50%;
  transition: 0.3s;
  top: -500px;
  transform: translate(50%, -50%);
  background-color: white;
  z-index: 1000;
  &.showModalDiv {
    top: 50%;
  }
  h3 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 10px;
    background-color: #f1f1f1;
  }
  span {
    cursor: pointer; // Make the close button a pointer cursor
  }
`;
