import React, { useEffect, useState } from 'react';
import { fetchComments } from '../functions/api';

const CommentList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideoComments = async () => {
      try {
        const comments = await fetchComments(videoId);
        setComments(comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchVideoComments();
  }, [videoId]);

  return (
    <div className="mt-4">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="p-2 border-b border-gray-200">
            <div className="flex items-center">
              <img
                src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt={comment.snippet.topLevelComment.snippet.authorDisplayName}
                className="rounded-full w-8 h-8 mr-2"
              />
              <span className="font-semibold">{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
            </div>
            <p className="ml-10">{comment.snippet.topLevelComment.snippet.textDisplay}</p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentList;
