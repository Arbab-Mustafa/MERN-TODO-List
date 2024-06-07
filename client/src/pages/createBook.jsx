import { useState } from "react";
import BackButton from "../components/backButton";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  //

  const handleBookSave = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    //
    axios
      .post("http://localhost:5000/api/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Error Creating Book", { variant: "error" });
        setLoading(false);
      });
  };

  //
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Create Book</h1>
      {/*  */}
      {loading ? <Spinner /> : ""}
      {/*  */}

      <div className="flex flex-col border-2  border-sky-400  rounded-xl w-[600px] p-4 mx-auto ">
        {/*  */}
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4  text-gray-500">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/*  */}
        <div className="my-4">
          <label htmlFor="author" className="text-xl mr-4  text-gray-500">
            Author
          </label>
          <input
            type="text"
            id="author"
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        {/*  */}

        <div className="my-4">
          <label htmlFor="publishYear" className="text-xl mr-4  text-gray-500">
            Publish Year
          </label>
          <input
            type="text"
            id="publishYear"
            className="border-2 border-gray-500 px-4 py-2 w-full"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleBookSave}>
          {" "}
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
