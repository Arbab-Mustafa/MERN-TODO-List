import { useState, useEffect } from "react";
import Spinner from "../components/spinner";
import BackButton from "../components/backButton";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  //
  useEffect(() => {
    setLoading(true);
    //
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => {
        setBook(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  //
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> show Book</h1>
      {/*  */}

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2  border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Id</span>
            <span className="text-xl">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Title</span>
            <span className="text-xl">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Author</span>
            <span className="text-xl">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Publish Year</span>
            <span className="text-xl">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Create Time</span>
            <span className="text-xl">
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4  text-gray-500">Id</span>
            <span className="text-xl">
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
