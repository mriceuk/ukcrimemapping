import React from 'react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class IncidentMarker extends React.Component {
	
	render() {
		return (
			<div className="incident"> MyPlace</div>
		)
	}
	
}


class Gmap extends React.Component {

  constructor(props) {
	  
	  super(props);
	  
	  //defaults to london geocode, zoom level 11
	  this.defaultCenter = { lat: 51.5074, lng:  0.1278 }
	  this.zoom = this.props.zoom || 11
	  //.map( crime => crime.category)

	  
  }

  render() {
		
		if ( this.props.crimes ) {
			
			let incidents = this.props.crimes.map(function(crime) {
				//<IncidentMarker lat={crime.location.latitude} lng={crime.location.longitude}/>
				return (<p>test</p>)
			});
			console.log(incidents)
			
		}
	  	
		//console.log('rendering map');
		//console.log( 'props center', this.props.center);
		//console.log( 'new center', this.center);

//<IncidentMarker lat={51.5074} lng={0.1278}/>
	    return (
	      <GoogleMapReact
	        defaultCenter={this.defaultCenter}
	        defaultZoom={this.zoom}
	        center={this.props.center}
	      >
	        
	        
	      </GoogleMapReact>
	    );
  }
  
}


export default Gmap;