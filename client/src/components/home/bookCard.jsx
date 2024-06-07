/* eslint-disable react/prop-types */

import SingleCard from "./singleCard";

//
const BookCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => {
        return <SingleCard item={item} key={item._id} />;
      })}
    </div>
  );
};

export default BookCard;
