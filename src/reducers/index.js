import { combineReducers } from 'redux'
import { REQUEST_CRIMES, RECEIVE_CRIMES, UPDATE_LOCATION } from '../actions'

const filters = (state = "", action) => {
  	switch (action.type) {
		case UPDATE_LOCATION:
			return Object.assign({}, state, {
		    	location: action.location
		    })
	    case REQUEST_CRIMES:
	    	return Object.assign({}, state, {
		    })
	    default:
	      return state
	}
}


const combinedReducer = combineReducers({
  filters
})

export default combinedReducer
