import axios from 'axios'

export const REQUEST_CRIMES = 'RETRIEVE_CRIMES'
export const RECEIVE_CRIMES = 'RECEIVE_CRIMES'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'
export const UPDATE_GEOCODE = 'UPDATE_GEOCODE'

export const requestCrimes = location => ({
  type: REQUEST_CRIMES,
  location
})

export const updateLocation = location => ({
  type: UPDATE_LOCATION,
  location
})

export const updateGeocode = geocode => ({
	
	type: UPDATE_GEOCODE,
	geocode

})

function receiveCrimes(crimes, status) {
	
	return {
	  type: RECEIVE_CRIMES,
	  crimes,
	  status
  }
  
}

export function getCrimes(location) {
	
	return dispatch => {
		
		//geocode address string using google's api
		axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyB8naUAUnxu8HaMA0z5v5VJt5w_rXUQu6g&region=UK")
		.then(function (response) {
			  
			let newGeocode = response.data.results[0].geometry.location;
			dispatch( updateGeocode( newGeocode ) );
			  
			//obtain crime data using newly acquired lat & lng values
			axios.get("https://data.police.uk/api/crimes-street/all-crime?lat="+newGeocode.lat+"&lng="+newGeocode.lng+"&date=2013-01")
			.then(function (response) {
				
				//send crimes data to Gmap
				dispatch( receiveCrimes(response.data, 'location: ' + location + ' | results: ' + response.data.length + ' | displaying 1-100') )
				
			})
			
		})
		.catch(function (error) {
		    console.log(error);
		});
	
		
	}

  
}
