import axios from 'axios'

export const REQUEST_CRIMES = 'RETRIEVE_CRIMES'
export const RECEIVE_CRIMES = 'RECEIVE_CRIMES'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'
export const UPDATE_GEOCODE = 'UPDATE_GEOCODE'

export const requestCrimes = location => ({
  type: REQUEST_CRIMES,
  location
})

export const receiveCrimes = location => ({
  type: RECEIVE_CRIMES,
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

export function getCrimes(location) {
	
	return dispatch => {
		
		//geocode address string using google's api
		axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyB8naUAUnxu8HaMA0z5v5VJt5w_rXUQu6g")
		.then(function (response) {
			  
			let lat = response.data.results[0].geometry.location.lat;
			let lng = response.data.results[0].geometry.location.lng;
			console.log('coordinates: ' + lat + ' ' + lng);
			  
			//obtain crime data using newly acquired lat & lng values
			axios.get("https://data.police.uk/api/crimes-street/all-crime?lat="+lat+"&lng="+lng+"&date=2013-01")
			.then(function (response) {
				//dispatch action to send crimes objects to reducer, then to props crimes
				//dispatch(receiveCrimes(location, response.data)))

				console.log(response);
			})
			
		})
		.catch(function (error) {
		    console.log(error);
		});
		
		/*
		return fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyB8naUAUnxu8HaMA0z5v5VJt5w_rXUQu6g").then( function(response) {
			
			if(response.ok) {
				
				alert('successful');
				var locationData = response.json();
				dispatch(storeLocation(locationData))
				console.log(json);
				return response.json();
				
		  	}
		  	
		  	throw new Error('Could not get location');
			
			var json = response.json()
			debugger;
			console.log(response, response);
			alert('location geocoded');
			
			
		})
		*/
		/*
		.then(function(response) {
			
			//console.log(response.results)
			fetch('https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2013-01')
			.then(response => response.json())
				//.then(json => dispatch(receiveCrimes(location, json)))
				.then(function(json) {
				    //console.log(json);
			})

		})	
		*/	
		

		
	}

  
}
