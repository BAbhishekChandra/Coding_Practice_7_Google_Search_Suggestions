// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onClickArrowChangeSearchInput} = props
  // console.log(suggestionDetails)

  const {suggestion} = suggestionDetails
  // console.log(id, suggestion)

  const onClickArrow = () => {
    onClickArrowChangeSearchInput(suggestion)
  }

  return (
    <li className="li-container">
      <p className="title">{suggestion}</p>
      <img
        className="arrow-image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
