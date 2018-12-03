var React = require('react')
var queryString = require('query-string')
var api = require('../utils/api')

class Results extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount () {
    var players = queryString.parse(this.props.location.search)

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function (results) {
      if (results === null) {
        return this.setState(funciton () {
          return {
            error: 'Look like there was error. Check that both users exist on Github',
            loading: false,
          }
        })
      }
      this.setState(function () {
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false
        }
      })
    })
  }

  render() {
    var {error, winner, loser, loading } = this.state

    if (loading === true) {
      return <p>Loading</p>
    }
    return (
      <div>
        Results
      </div>
    )
  }
}

module.exports = Results