import "./App.css";
function App() {
  interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    quantity: number;
  }

  type BookFormat = "paperback" | "hardcove" | "ebook";

  type LibraryBook = Book & { format: BookFormat };

  const myBook: LibraryBook = {
    id: 1,
    title: "Title1",
    author: "Author1",
    genre: "Genre1",
    quantity: 250,
    format: "paperback",
  };

  console.log("myBook", myBook);

  interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    quantity: number;
  }

  const Libary: Book = {
    id: 1,
    title: "Title1",
    author: "Author1",
    genre: "Genre1",
    quantity: 250,
  };
  console.log("Libarary", Libary);

  enum genre {
    Fiction = 1,
    NonFiction,
    Mystery,
    Thriller,
  }
  const genreNum = 2;
  const genereValue = genre[genreNum];
  console.log(genereValue);

  return (
    <>
      <h1>TypeScript-II</h1>
    </>
  );
}

export default App;
