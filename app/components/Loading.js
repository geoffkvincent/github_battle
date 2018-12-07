var React = require('react')
var PropTypes = require('prop-types')

var styles = {
  content: {
    textAlign: 'center',
    fontsize: '35 px'
  }
}

class Loading extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      text: 'Loading'
    }
  }
  render() {
    return (
      <p style={ styles.content }>
        {this.state.text}
      </p>
    )
  }
}

module.exports = Loading