import { combineReducers } from 'redux'
import { REQUEST_CRIMES, RECEIVE_CRIMES, UPDATE_LOCATION, UPDATE_GEOCODE } from '../actions'

const filters = (state = "", action) => {
  	switch (action.type) {
		case UPDATE_LOCATION:
			return Object.assign({}, state, {
		    	location: action.location
		    })
	    case REQUEST_CRIMES:
	    	return Object.assign({}, state, {
		    })
		case UPDATE_GEOCODE:
			return Object.assign({}, state, {
		    	geocode: action.geocode
		    })	
		case RECEIVE_CRIMES:

			return Object.assign({}, state, {
		    	crimes: action.crimes
		    })			
	    default:
	    	return state
	}
}


const combinedReducer = combineReducers({
  filters
})

export default combinedReducer
