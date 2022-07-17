import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { commentUpdate, commentDelete } from '../redux/actions';

const SingleComment = ({ data }) => { 
    const [commentText, setCommentText] = useState('');

    const { text, id } = data;

    const dispatch = useDispatch();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(commentUpdate(commentText, id));
    }

    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text]);

    const handleInput = (event) => {
        setCommentText(event.target.value);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(commentDelete(id));
    }
    
    return (
        <form onSubmit={handleUpdate} className="comments-item">
            <div onClick={handleDelete} className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden/>
        </form>
    )
}

export default SingleComment;