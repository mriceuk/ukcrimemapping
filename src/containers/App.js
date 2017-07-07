import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateField } from '../actions'
import Gmap from '../views/Gmap'

class App extends Component {
  static propTypes = {
    changedInput: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, changedInput } = this.props
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.changedInput !== this.props.changedInput) {
      const { dispatch, changedInput } = nextProps
    }
  }

  handleChange = targetField => {
    this.props.dispatch(updateField(targetField.target.value))
  }

  render() {

    const { changedInput } = this.props
    return (
      <div>
        <p>
          {changedInput}
        </p>
        <input type="text" name="name" value={changedInput} onChange={this.handleChange} placeholder="Full Name"/>
       <div id='gmapwrap'><Gmap/></div>
      </div>
    )
  }
}

const mapStateToProps = state => {

 	const { changedInput } = state

	return {
	changedInput,
	}

}

export default connect(mapStateToProps)(App)
