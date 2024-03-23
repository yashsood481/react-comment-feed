import { useState } from "react";
import UserBadge from "./UserBadge";

const AddComment = ({
  setComments,
  onCommentCreate = () => {},
  updateComments,
  setTotalComments,
  totalComments,
}) => {
  const [comment, setComment] = useState("");
  const addCommentHandler = () => {
    setComment("");
    const newComment = {
      user: "Yash Sood",
      id: +totalComments + 1,
      comment: comment,
      subComments: [],
      likes: 0,
    };
    setComments((prev) => updateComments(prev, newComment));
    setTotalComments((prev) => +prev + 1);
    onCommentCreate();
  };

  return (
    <div className="flex gap-2 w-full mb-4 items-center">
      <div>
        <UserBadge />
      </div>
      <div className="flex gap-3 flex-grow">
        <textarea
          placeholder="Add a comment..."
          className="w-full text-black p-1 rounded bg-slate-100"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>
        <button
          onClick={addCommentHandler}
          disabled={comment === ""}
          className="p-2 bg-emerald-500 border-1 rounded me-2"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddComment;
