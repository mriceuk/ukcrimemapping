import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCrimes, updateLocation } from '../actions'
import Gmap from '../views/Gmap'

class App extends Component {


  componentDidMount() {

    const { dispatch, filters } = this.props
 	//this.props.dispatch( fetchCrimes() );	    
 	 
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters !== this.props.filters) {
      const { dispatch, filters } = nextProps
    }
  }

  handleChange = locationField => {
    this.props.dispatch(updateLocation(locationField.target.value))
    
  }
  
  handleSubmit = location => {
	
	this.props.dispatch( fetchCrimes(this.props.filters.location) );
	 
  } 
  
  render() {

    return (
      <div>
	  		<div className='options-panel'>
		        <input id="locationSelector" type="text" name="name" placeholder="Postcode or Place name" onChange={this.handleChange} />
		        <input type="button" name="button" value="submit" className="chunky-button" onClick={this.handleSubmit}/>
	        </div>
			<div id='gmapwrap'><Gmap/></div>
      </div>
    )
    
  }
  
}

const mapStateToProps = state => {
 	return state
}

export default connect(mapStateToProps)(App)
