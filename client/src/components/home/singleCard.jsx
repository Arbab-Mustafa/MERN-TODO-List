/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModel from "./bookModel";
import { useState } from "react";
import { BiShow } from "react-icons/bi";

const SingleCard = ({ item }) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div
      key={item._id}
      className="border-2 border-gray-500  rounded-xl px-4 py-2 m-4 relative hover:shadow-lg"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300  rounded-lg">
        {item.publishYear}
      </h2>
      <h2 className="my-4 text-gray-500">{item._id}</h2>
      <div className="flex justify-start  items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{item.title}</h2>
      </div>
      <div className="flex justify-start  items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{item.author}</h2>
      </div>
      <div className="flex justify-between  items-center gap-x-2 m-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor:pointer"
          onClick={() => setShowModel(true)}
        />

        <Link to={`/books/details/${item._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${item._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${item._id}`}>
          <MdOutlineDelete className="text-2xl text-red-800 hover:text-black" />
        </Link>
      </div>

      {showModel && (
        <BookModel item={item} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
};

export default SingleCard;
