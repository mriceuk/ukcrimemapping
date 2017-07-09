import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCrimes, updateFilters, updateGeocode } from '../actions'
import Gmap from '../views/Gmap'

class App extends Component {


  componentDidMount() {
    const { dispatch, filters } = this.props
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters !== this.props.filters) {
      const { dispatch, filters } = nextProps
      this.geocode = this.props.filters.geocode

    }
  }

  handleChange = event => {
    this.props.dispatch( updateFilters({
	    location: document.getElementById('options-panel--locationSelector').value,
	    year: document.getElementById('options-panel--year').value,
		month: document.getElementById('options-panel--month').value
	}) )
  }
  
  handleSubmit = event => {
	  
	this.props.dispatch( getCrimes( { 
		location: this.props.filters.location, 
		month: this.props.filters.month, 
		year: this.props.filters.year  
	} ) )
	
  } 
  
  render() {

  	let initialCoordinates = { lat: 51.5074, lng:  0.1278 }
  	
    return (
      <div>
	  		<div className='options-panel'>
		      <input id="options-panel--locationSelector" type="text" name="name" placeholder="Postcode or Place name" onChange={this.handleChange} />
		      <select id='options-panel--year' name='year' onChange={this.handleChange}>
		      	<option>2017</option>
		      	<option>2016</option>
		      	<option>2015</option>
		      	<option>2014</option>
		      	<option>2013</option>
		      	<option>2012</option>
		      	
		      </select>
		      <select id='options-panel--month' name='month' onChange={this.handleChange}>
		      	<option>12</option>
		      	<option>11</option>
		      	<option>10</option>
		      	<option>9</option>
		      	<option>8</option>
		      	<option>7</option>
		      	<option>6</option>	
		      	<option>5</option>	
		      	<option>4</option>		
		      	<option>3</option>		
		      	<option>2</option>		
		      	<option>1</option>			      		      		      		      			      		      			      	
		      </select>
		      <input type="button" name="button" value="submit" className="chunky-button" onClick={this.handleSubmit}/>
		      <div className='status'>{this.props.filters.status}</div>
	    </div>
			<div id='gmapwrap'><Gmap center={ this.props.filters.geocode }  crimes={this.props.filters.crimes} /></div>
      </div>
    )
    
  }
  
}

const mapStateToProps = state => {
 	return state
}

export default connect(mapStateToProps)(App)
