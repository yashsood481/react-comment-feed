import { useState } from "react";
import UserBadge from "./UserBadge";
import AddComment from "./AddComment";

const Comment = ({
  user,
  comment,
  subComments,
  likes,
  setComments,
  comments,
  setTotalComments,
  totalComments,
}) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const allSubComments = subComments;

  const likeHandler = () => {
    setLikeCount((prev) => +prev + 1);
  };

  const replyHandler = () => {
    setShowReplyBox(true);
  };

  const onCommentCreate = () => {
    setShowReplyBox(false);
  };

  const updateComments = (currentComments, newComment) => {
    subComments.push(newComment);
    const clonedComments = structuredClone(currentComments);
    return clonedComments;
  };
  return (
    <>
      <div className="flex gap-2 mb-2">
        <UserBadge username={user} />
        <div className="flex-grow">
          <div className="flex gap-2 font-bold items-center">
            <span>{user}</span>
            <div className="text-white bg-red-500 rounded w-6 h-4 p-0 flex justify-center items-center">
              {likeCount}
            </div>
          </div>
          <div>{comment}</div>
          <div className="flex gap-3">
            <div className="flex">
              <button onClick={likeHandler} className="text-blue-400">
                Like
              </button>
            </div>
            <button onClick={replyHandler} className="text-blue-400">
              Reply
            </button>
          </div>
        </div>
      </div>

      {showReplyBox && (
        <div className="ms-10 border-l-2">
          <AddComment
            setComments={setComments}
            onCommentCreate={onCommentCreate}
            updateComments={(comments, newComment) =>
              updateComments(comments, newComment)
            }
            setTotalComments={setTotalComments}
            totalComments={totalComments}
          />
        </div>
      )}
      {allSubComments?.length > 0 && (
        <div className="ms-10 border-l-2">
          {allSubComments?.map((subComment) => (
            <Comment
              key={subComment.id}
              user={subComment.user}
              comment={subComment.comment}
              subComments={subComment.subComments}
              likes={subComment.likes}
              setComments={setComments}
              comments={comments}
              setTotalComments={setTotalComments}
              totalComments={totalComments}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Comment;
