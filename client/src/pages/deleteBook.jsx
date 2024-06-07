import Spinner from "../components/spinner";
import { useState } from "react";
import BackButton from "./../components/backButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  //

  const handleDelete = () => {
    setLoading(true);
    //

    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Error Deleting Book", { variant: "error" });
        setLoading(false);
      });
  };

  //
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}

      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl max-w-[600px] p-8 mx-auto">
        <h2 className="text-2xl my-4">
          Are you sure want to delete this book?
        </h2>
        <button
          onClick={handleDelete}
          className="p-4 bg-red-600 text-white m-8 w-full"
        >
          Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
