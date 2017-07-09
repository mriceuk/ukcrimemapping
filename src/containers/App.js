import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCrimes, updateFilters, updateStatus } from '../actions'
import Gmap from '../views/Gmap'


class LocationSelector extends Component {
	
  	render() {
	  	
	  	return (
		<input id="options-panel--locationSelector" type="text" name="name" placeholder="Postcode or Place name" onChange={this.props.handleChange} />
		)
	}
};


class MonthSelector extends Component {
	
	listYears() {
		
		const currentYear = new Date().getFullYear();
		const startYear = 1980;		
		var years = [];
		var i;

		years.push(<option value='' key='0'>Year</option>)
		for ( i=currentYear; i >= startYear; i-- ) {
			years.push(<option key={i}>{i}</option>);
	    }
	    return years;
	    
	}
	
	
	listMonths() {
		
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var monthsOptions = [];
		monthsOptions.push(<option value='' key='0'>Month</option>)
		months.forEach(function(item, index) {
			monthsOptions.push(<option value={index} key={index+1}>{item}</option>)
		});
		return monthsOptions;
		
	}
	
	
	render() {
		
		return (
			
			<div className='month-selector'>

				<select id='options-panel--year' name='year' onChange={this.props.handleChange} >
			      	{this.listYears()}
			    </select>
			      
			    <select id='options-panel--month' name='month' onChange={this.props.handleChange} >
			    	{this.listMonths()}			      		      		      		      			      		      			      	
				</select>
			
			</div>
		)
		
	}
	
};


class App extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters !== this.props.filters) {
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
	
	if ( document.getElementById('options-panel--year').value === '' || document.getElementById('options-panel--month').value === '' ) {
		this.props.dispatch( updateStatus('Select Month') )
		return false;
	}
 
	this.props.dispatch( getCrimes( { 
		location: this.props.filters.location, 
		month: this.props.filters.month, 
		year: this.props.filters.year  
	} ) )
	
  } 
  
  render() {

    return (
	   
      <form >
      		
	  	<div className='options-panel'>
	  		
  			<LocationSelector handleChange={this.handleChange}/>
  			<MonthSelector handleChange={this.handleChange}/> 
			<input type="button" name="button" value="submit" onClick={this.handleSubmit}/>
			<div className='status'>{this.props.filters.status}</div>
				
	    </div>
	    
		<div id='gmapwrap'>
			<Gmap center={ this.props.filters.geocode }  crimes={this.props.filters.crimes} />
		</div>
		
      </form>
    )
    
  }
  
}

const mapStateToProps = state => {
 	return state
}

export default connect(mapStateToProps)(App)
