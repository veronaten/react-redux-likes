const SingleComment = (props) => {

    // console.log('single comment props>>', props)
    return (
        <form action="" className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input type="text" />
            <input type="submit" hidden/>
        </form>
    )
}

export default SingleComment;