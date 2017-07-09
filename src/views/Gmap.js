import React from 'react'
import GoogleMapReact from 'google-map-react';



class Gmap extends React.Component {

  constructor(props) {
	  
	  super(props);
	  
	  //defaults to london geocode, zoom level 11
	  this.defaultCenter = { lat: 51.5074, lng:  0.1278 }
	  this.defaultZoom = 14

	  
  }

  render() {
		
		var incidents = [];
		
		if ( this.props.crimes ) {	
	
			this.props.crimes.forEach(function(crime, i) {
				if (i > 99) { return }
			  incidents.push(<span className='incident' lat={crime.location.latitude} lng={crime.location.longitude} key={i}></span>);

			});
			
		}
		
		//alert(this.zoom);
		
    return (
      <GoogleMapReact
        defaultCenter={this.defaultCenter}
        defaultZoom={this.defaultZoom}
        center={this.props.center}

      >
      
      {incidents}
        
      </GoogleMapReact>
    );
    
    
  }
  
}


export default Gmap;