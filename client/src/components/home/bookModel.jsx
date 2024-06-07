/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ item, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0  left-0  right-0 bottom-0 z-50  flex justify-center items-center "
      onClick={onClose}
    >
      <div
        className=" w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute top-6 right-6 text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className=" w-fit px-4 py-1 bg-red-300  rounded-lg">
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
        <p className="mt-4 text-2xl"> Arbab Mustafa</p>
      </div>
    </div>
  );
};

export default BookModel;
