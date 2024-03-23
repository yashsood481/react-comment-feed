import { useState } from "react";
import AddComment from "./components/AddComment";
import CommentFeed from "./components/CommentFeed";

function App() {
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const updateComments = (comments, newComment) => {
    return [...comments, { ...newComment }];
  };

  return (
    <main className="bg-slate-900 min-h-screen text-white">
      <h1 className="text-center text-2xl mb-3">Custom comment feed</h1>
      <AddComment
        setTotalComments={setTotalComments}
        totalComments={totalComments}
        setComments={setComments}
        updateComments={(comments, newComment) =>
          updateComments(comments, newComment)
        }
      />
      <CommentFeed
        comments={comments}
        setComments={setComments}
        setTotalComments={setTotalComments}
        totalComments={totalComments}
      />
    </main>
  );
}

export default App;
