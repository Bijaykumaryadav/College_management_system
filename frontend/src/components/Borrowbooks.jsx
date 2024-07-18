import { useState } from "react";
import { AddMarksButton } from "../styles/AddMarksStyles";
import { useNavigate } from "react-router-dom";

const BorrowBooks = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const handleNavigateToken = () => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  };

  const handleNavigateToDashboard = () => {
    navigate("/student/library");
  };

  return (
    <>
      <AddMarksButton onClick={handleNavigateToken}>
        Generate Borrow Token
      </AddMarksButton>
      {token && (
        <div>
          <p>
            Your token had been generated go to the library and collect the
            book.
          </p>
          <p>Token: {token}</p>
        </div>
      )}
      <AddMarksButton onClick={handleNavigateToDashboard}>
        Go Back
      </AddMarksButton>
    </>
  );
};

export default BorrowBooks;
