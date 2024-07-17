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
        "http://localhost:4000/api/v1/library/getall"
      );
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/library/books",
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
              </BookItem>
            ))}
          </BookList>
        </Content>
      </LibraryContainer>
    </SidebarProvider>
  );
};

export default Library;
