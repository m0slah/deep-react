const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// const books = getBooks();

// const book = getBook(3);

// // const title = book.title;
// // const author = book.author;

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;

// // const firstGenres = genres[0];
// // const secondGenres = genres[1];

// const [firstGenres, secondGenres, ...others] = genres;

// // console.log(firstGenres, secondGenres, others);

// const newGenres = ["epic fantasy", ...genres];

// // newGenres;

// const [firstG, secondG, ...other] = genres;

// const updateBook = { ...book, publicationDate: "2020-1-13", page: 1210 };

// // console.log(updateBook);

// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
//   publicationDate
// )}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
// summary;

// const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
// pagesRange;
// console.log(`The book has ${pagesRange} pages`);

// console.log(true && "some strings");
// console.log(false && "some strings");
// console.log(hasMovieAdaptation && "this book has a movie");

// // falsy value : 0 , '' , undefined , null
// console.log("hello" && "world");
// console.log("" && "world");

// console.log(true || "second value");
// console.log(false || "second value ");

// console.log(book.translations.spanish);

// const spanishTranslation = book.translations.spanish || "not translation";
// spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";

// countWrong;

// console.log(0 ?? "test");

// function getTotalReviewCount(book) {
//   const librarything = book.reviews?.librarything.reviewsCount;
//   const goodReads = book.reviews?.librarything?.reviewsCount ?? 0;

//   return librarything + goodReads;
// }

// console.log(getTotalReviewCount(book));

// function getBooks() {
//   return data;
// }

// function getBook(id) {
//   return data.find((data) => data.id === id);
// }

// const books = getBooks();

// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// titles;

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   librarything;
//   return goodreads + librarything;
// }

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviewCount(book),
// }));
// essentialData;

// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooksWithMovie;

// const adventureBooks = books
//   .filter((books) => books.genres.includes("adventure"))
//   .map((book) => book.title);
// adventureBooks;

// console.log(adventureBooks);

// const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

// console.log(pagesAllBooks);

// const arr = [2, 3, 1, 6, 9];

// const sort = arr.slice().sort((a, b) => a - b);

// console.log(sort);
// console.log(arr);

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedByPages;

// // 1)add book object to array

// const newBook = {
//   id: 6,
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
// };

// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// // 2) delete book object from array

// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// // 3)update object in array

// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 3 } : book
// );

// booksAfterUpdate;

// fetch("https://jsonplaceholder.org/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function getPosts() {
  const response = await fetch("	https://jsonplaceholder.org/posts");
  const data = await response.json();

  return data;
}

const posts = getPosts();
console.log(awaitposts);
