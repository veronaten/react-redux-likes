import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { commentUpdate } from '../redux/actions';

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
    
    return (
        <form onSubmit={handleUpdate} className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden/>
        </form>
    )
}

export default SingleComment;