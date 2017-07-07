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
	
  static defaultProps = {
    center: {lat: 51.5074, lng:  0.1278},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <IncidentMarker lat={51.5074} lng={0.1278}/>
        
      </GoogleMapReact>
    );
  }
}


export default Gmap;