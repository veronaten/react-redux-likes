import {connect} from 'react-redux'
// import { INCREMENT } from './redux/Types';

function Likes(props) {
  console.log('propses Likes', props);
  return (
    <div className="button-controls">
        <button onClick={props.onIncrementLikes}>♡ {props.likes}</button>
        <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  )
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    const {likesReducer} = state;
    return {
        likes: likesReducer.likes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLikes: () => {
            console.log('click')
            const increment = { type: 'INCREMENT' }
            dispatch(increment);
        },
        onDecrementLikes: () => {
            const decrement = { type: 'DECREMENT'}
            dispatch(decrement);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);