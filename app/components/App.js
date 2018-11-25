var React = require('react')
var Popular = require('./Popular')
var ReactRouter = require('react-router-dom')
var Router = React.Router.BrowserRouter
var Route = ReactRouter.Route

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App