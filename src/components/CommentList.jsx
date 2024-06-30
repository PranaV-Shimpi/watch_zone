import React, { useEffect, useState } from "react";
import { fetchComments } from "../functions/api";

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(5); // Number of comments initially visible

  useEffect(() => {
    const fetchVideoComments = async () => {
      try {
        const fetchedComments = await fetchComments(videoId);
        setComments(fetchedComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchVideoComments();
  }, [videoId]);

  const toggleShowMore = () => {
    setVisibleComments((prevVisibleComments) =>
      prevVisibleComments === 5 ? comments.length : 5
    );
  };

  return (
    <div className="mt-4 mb-10">
      {comments.length > 0 ? (
        <>
          {comments.slice(0, visibleComments).map((comment) => (
            <div key={comment.id} className="p-2 border-b border-gray-200">
              <div className="flex items-center">
                <img
                  src={
                    comment.snippet.topLevelComment.snippet
                      .authorProfileImageUrl
                  }
                  alt={
                    comment.snippet.topLevelComment.snippet.authorDisplayName
                  }
                  className="rounded-full w-8 h-8 mr-2"
                />
                <span className="font-semibold">
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}
                </span>
              </div>
              <p className="ml-10">
                {comment.snippet.topLevelComment.snippet.textDisplay}
              </p>
            </div>
          ))}
          <div className="flex justify-center mt-2">
            <button
              className="text-blue-500 hover:underline"
              onClick={toggleShowMore}
            >
              {visibleComments === 5
                ? "Load more comments"
                : "Show less Comments"}
            </button>
          </div>
        </>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentList;
