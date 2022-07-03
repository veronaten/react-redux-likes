import { useState } from "react";
import SingleComment from "./SingleComment";

const Comments = (props) => {

    const [textComment, setTextComment] = useState('');
    // console.log('comments props >>',props);

    

    const handleInput = (event) => {
         console.log('input >>', event.target.value);
         setTextComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit textComment>', textComment);
    }
    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            <SingleComment />
        </div>
    )
}

export default Comments;
