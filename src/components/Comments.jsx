import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';
import { commentCreate } from "../redux/actions";
import SingleComment from "./SingleComment";

const Comments = (props) => {
    const [textComment, setTextComment] = useState('');

    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    });

    const dispatch = useDispatch();
    

    const handleInput = (event) => {
        //  console.log('input >>', event.target.value);
         setTextComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment('');
    }

    console.log('COMMENTS >', comments);
    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res}/>
            })}
          
        </div>
    )
}

export default Comments;
