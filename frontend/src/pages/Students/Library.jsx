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

const LibrarySection = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/library/getall"
      );
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleBorrowBook = (bookId, studentId) => {
  };

  const handleBookReturn = async (bookId, studentId) => {
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
