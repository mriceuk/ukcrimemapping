import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCrimes, updateLocation, updateGeocode } from '../actions'
import Gmap from '../views/Gmap'

class App extends Component {


  componentDidMount() {
    const { dispatch, filters } = this.props
    
    this.geocode = { lat: 51.5074, lng:  0.1278 }
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters !== this.props.filters) {
      const { dispatch, filters } = nextProps
      //alert('new props');
      console.log('componentWillReceiveProps');
      this.geocode = this.props.filters.geocode
      console.log('in componentWillReceiveProps this.geocode = ' + this.geocode);
    }
  }

  handleChange = locationField => {
    this.props.dispatch( updateLocation(locationField.target.value) )
  }
  
  handleSubmit = location => {
	  
	//this.props.dispatch( getCrimes(this.props.filters.location) );
	//this.props.geocode = { lat: 51.5074, lng:  0.1278 }
	//console.log( this.props.geocode );
	//this.geocode = { lat: 40.5074, lng:  0.1278 }
	//this.forceUpdate()
	
	//{ lat: 40.5074, lng:  0.1278 }
	this.props.dispatch( updateGeocode( { lat: 40.5074, lng:  0.1278 } ) )
	
  } 
  
  render() {
  	
  	console.log('in props there is = ', this.props);
  	console.log(this.geocode);
  	let locale = this.props.filters.location
  	let initialCoordinates = { lat: 51.5074, lng:  0.1278 }
  	let initialZoom = 11
  	
    return (
      <div>
      		{locale}
	  		<div className='options-panel'>
		        <input id="locationSelector" type="text" name="name" placeholder="Postcode or Place name" onChange={this.handleChange} />
		        <input type="button" name="button" value="submit" className="chunky-button" onClick={this.handleSubmit}/>
	        </div>
			<div id='gmapwrap'><Gmap center={ this.props.filters.geocode } zoom={initialZoom} /></div>
      </div>
    )
    
  }
  
}

const mapStateToProps = state => {
 	return state
}

export default connect(mapStateToProps)(App)
