import { useState, useEffect } from "react";

import axios from "axios";
import Spinner from "./../components/spinner";
import { Link } from "react-router-dom";
import BookCard from "../components/home/bookCard";
import BookTable from "../components/home/bookTable";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  // api call

  useEffect(() => {
    setLoading(true);
    //
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      {/*  */}

      <div className="flex justify-between  items-center">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1  rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1  rounded-lg"
          onClick={() => setShowType("card")}
        >
          card
        </button>
      </div>

      {/*  */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create" className="btn btn-primary">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {/*  */}

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home;
