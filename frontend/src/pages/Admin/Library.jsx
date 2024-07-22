import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./SidebarContext";

import axios from "axios";
import {
  LibraryContainer,
  Content,
  Title,
  AddBookForm,
  FormGroup,
  Label,
  Input,
  Button,
  BookList,
  BookItem,
  BookTitle,
  BookAuthor,
} from "../../styles/LibraryStyles";

const Library = () => {
  const [books, setBooks] = useState([]);

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

  const addBook = async (book) => {
    try {
      const response = await axios.post(
        "https://bticlz.onrender.com/api/v1/library/books",
        {
          bookname: book.title,
          author: book.author,
        }
      );
      setBooks([...books, response.data.book]);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleTokenSubmit = (bookId, token) => {
    // Handle token submission logic here for a specific book (using bookId)
    console.log("Token entered for book:", bookId, token);
    // Clear the token input after submission (optional)
    // Reset the token input value
    // setToken("");
  };

  return (
    <SidebarProvider>
      <LibraryContainer>
        <Sidebar />
        <Content>
          <Title>Library Management</Title>
          <AddBookForm
            onSubmit={(e) => {
              e.preventDefault();
              const book = {
                id: Math.random().toString(36).substr(2, 9),
                title: e.target.title.value,
                author: e.target.author.value,
              };
              addBook(book);
              e.target.reset();
            }}
          >
            <h2>Add New Book</h2>
            <FormGroup>
              <Label htmlFor="title">Title:</Label>
              <Input type="text" id="title" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="author">Author:</Label>
              <Input type="text" id="author" required />
            </FormGroup>
            <Button type="submit">Add Book</Button>
          </AddBookForm>

          <h2>Books</h2>
          <BookList>
            {books.map((book) => (
              <BookItem key={book._id}>
                <BookTitle>{book.bookname}</BookTitle>
                <BookAuthor>by {book.author}</BookAuthor>
                {/* Token input and submit button */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const token = e.target.token.value;
                    handleTokenSubmit(book._id, token);
                    // Reset the input field after submission
                    e.target.reset();
                  }}
                >
                  <FormGroup>
                    <Label htmlFor={`token-${book._id}`}>
                      Enter the generated token:
                    </Label>
                    <Input
                      type="text"
                      id={`token-${book._id}`}
                      name="token"
                      placeholder="Enter the generated token"
                      required
                    />
                  </FormGroup>
                  <Button type="submit">Enter</Button>
                </form>
              </BookItem>
            ))}
          </BookList>
        </Content>
      </LibraryContainer>
    </SidebarProvider>
  );
};

export default Library;
