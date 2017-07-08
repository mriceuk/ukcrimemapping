import axios from 'axios'

export const REQUEST_CRIMES = 'RETRIEVE_CRIMES'
export const RECEIVE_CRIMES = 'RECEIVE_CRIMES'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'
export const UPDATE_GEOCODE = 'UPDATE_GEOCODE'

export const requestCrimes = location => ({
  type: REQUEST_CRIMES,
  location
})

export const receiveCrimes = crimes => ({
  type: RECEIVE_CRIMES,
  crimes
})

export const updateLocation = location => ({
  type: UPDATE_LOCATION,
  location
})

export const updateGeocode = geocode => ({
	
	type: UPDATE_GEOCODE,
	geocode

})

export function getCrimes(location) {
	
	return dispatch => {
		
		//geocode address string using google's api
		axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyB8naUAUnxu8HaMA0z5v5VJt5w_rXUQu6g")
		.then(function (response) {
			  
			let newGeocode = response.data.results[0].geometry.location;
			dispatch( updateGeocode( newGeocode ) );
			  
			//obtain crime data using newly acquired lat & lng values
			axios.get("https://data.police.uk/api/crimes-street/all-crime?lat="+newGeocode.lat+"&lng="+newGeocode.lng+"&date=2013-01")
			.then(function (response) {
				
				//dispatch action to send crimes objects to reducer, then to props crimes
				dispatch(receiveCrimes(response.data))
				
			})
			
		})
		.catch(function (error) {
		    console.log(error);
		});
	
		
	}

  
}
