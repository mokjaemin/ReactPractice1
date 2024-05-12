import React from "react";
import Comment from "./Comment";


const comments = [
    {
        name : "목재민",
        comment : "안녕하세요, 재민입니다.",
    },
    {
        name : "권영수",
        comment : "안녕하세요, 영수입니다.",
    },
    {
        name : "김가영",
        comment : "안녕하세요, 가영입니다.",
    },    
];


function CommentList(props){
    return (
        <div>
            {comments.map((comment => {
                return <Comment name={comment.name} comment={comment.comment}/>
            }))}
        </div>
    );
}

export default CommentList;