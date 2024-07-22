// LibrarySection.jsx
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  LibraryContainer,
  SidebarContainer,
  Content,
  LibraryHeader,
  BookList,
  BookItem,
  BookTitle,
  BorrowButton,
} from "../../styles/LibraryStyles";
import { SidebarProvider } from "./SidebarContext";
import { useNavigate } from "react-router-dom";

const LibrarySection = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://bticlz.onrender.com/api/v1/library/getall"
      );
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleBorrowBook = (bookId, studentId) => {
    navigate("/borrow");
  };

  const handleBookReturn = async (bookId, studentId) => {
    navigate("/return");
  };

  return (
    <SidebarProvider>
      <LibraryContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <LibraryHeader>Library</LibraryHeader>
          <BookList>
            {books.map((book) => (
              <BookItem key={book._id}>
                <BookTitle>{book.bookname}</BookTitle>
                <p>Author: {book.author}</p>
                <BorrowButton onClick={() => handleBorrowBook(book._id)}>
                  Borrow
                </BorrowButton>
                <BorrowButton
                  onClick={() => handleBookReturn(book._id, "student123")}
                >
                  Return
                </BorrowButton>
              </BookItem>
            ))}
          </BookList>
        </Content>
      </LibraryContainer>
    </SidebarProvider>
  );
};

export default LibrarySection;
