import fetch from 'isomorphic-fetch'

//const API_KEY = 'AIzaSyB8naUAUnxu8HaMA0z5v5VJt5w_rXUQu6g';

export const REQUEST_CRIMES = 'RETRIEVE_CRIMES'
export const RECEIVE_CRIMES = 'RECEIVE_CRIMES'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'

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

export function geocode(location) {
	
	return dispatch => {
		
		return fetch("https://maps.googleapis.com/maps/api/geocode/json?address={location}&key={API_KEY}").then( function(response) {
			alert('location geocoded');
		}).then(function(json) {
			console.log(json);
		})
	
	}

	
}

export function storeLocation() {
	
}

export function fetchCrimes(location) {
	
	return dispatch => {
		
		//dispatch(geocode(location))
		return fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyB8naUAUnxu8HaMA0z5v5VJt5w_rXUQu6g").then( function(response) {
			
			if(response.ok) {
				
				alert('successful');
				var locationData = response.json();
				dispatch(storeLocation(locationData))
				console.log(json);
				return response.json();
				
		  	}
		  	/*
		  	throw new Error('Could not get location');
			
			var json = response.json()
			debugger;
			console.log(response, response);
			alert('location geocoded');
			*/
			
		})
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
