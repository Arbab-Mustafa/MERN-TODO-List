import { Schema, mongoose } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    author: {
      type: String,
      required: [true, "Auther is required"],
    },
    // description: {
    //   type: String,
    //   required: [true, "Description is required"],
    // },
    publishYear: {
      type: Number,
      required: [true, "PublishYear is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
