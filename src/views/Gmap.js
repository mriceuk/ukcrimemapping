import React from 'react'
import GoogleMapReact from 'google-map-react';



class Gmap extends React.Component {


  render() {
	  
	  	//defaults to london geocode, zoom level 11
		const defaultCenter = { lat: 51.5073509, lng:  -0.1277583 }
		const defaultZoom = 14
		
		var incidents = [];
		
		if ( this.props.crimes ) {	
	
			this.props.crimes.forEach(function(crime, i) {
				if (i > 99) { return }
			  incidents.push(<span className='incident' lat={crime.location.latitude} lng={crime.location.longitude} key={i}></span>);

			});
			
		}
		
    return (
      <GoogleMapReact
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        center={this.props.center}
      >
	  
      {incidents}
        
      </GoogleMapReact>
    );
    
    
  }
  
}



export default Gmap;