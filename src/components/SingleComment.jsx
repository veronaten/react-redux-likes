import { useState, useEffect } from 'react';

const SingleComment = ({ data }) => { 
    const [commentText, setCommentText] = useState('');

    const { text, id } = data;

    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text]);

    const handleInput = (event) => {
        setCommentText(event.target.value);
    }
    
    return (
        <form action="" className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden/>
        </form>
    )
}

export default SingleComment;