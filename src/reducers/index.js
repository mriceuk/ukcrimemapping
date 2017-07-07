import { combineReducers } from 'redux'
import { UPDATE_FIELD } from '../actions'

const changedInput = (state = "", action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return action.fieldvalue
    default:
      return state
  }
}

const combinedReducer = combineReducers({
  changedInput
})

export default combinedReducer
