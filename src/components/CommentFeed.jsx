import Comment from "./Comment";

const CommentFeed = ({
  comments,
  setComments,
  setTotalComments,
  totalComments,
}) => {
  return (
    <section className="flex flex-col gap-1">
      {comments.map(({ id, subComments, user, comment, likes }) => {
        return (
          <Comment
            key={id}
            user={user}
            comment={comment}
            subComments={subComments}
            likes={likes}
            setComments={setComments}
            comments={comments}
            setTotalComments={setTotalComments}
            totalComments={totalComments}
          />
        );
      })}
    </section>
  );
};

export default CommentFeed;
