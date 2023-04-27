import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:  "박예찬",
        comment: "첫 번째 댓글입니당.",
    },
    {       name:  "이예찬",
          comment: " 금공강.",

    },
    {       name:  "김예찬",
          comment: "꽃가루 알러지 입니당."

    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
            );
            
            })}
            
            </div>

    );

        }
export default CommentList;