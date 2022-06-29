import { useDispatch, useSelector } from "react-redux/es/exports";
import { inputText } from "../redux/actions";

const Title = (props) => {
  console.log('title props:', props);
  const text = useSelector(state => {
    const {inputReducer} = state;
    return inputReducer.text
  })
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  }

  return (
    <div className="card-title">
      <div className="card-title-props">
        <input type="text" onChange={handleChange}/>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Title;