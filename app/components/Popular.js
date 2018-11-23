var React = require('react')

class SelectedLanguage extends React.Component {
  render() {
    <ul className='languages'>
      {languages.map(function(lang) {
        return (
          <li
            style={ lang === this.state.selectedLanguage ? { color: '#d0021B' }: null }
            onClick={this.updateLanguage.bind(null, lang)} 
            key={lang}>
            {lang}
          </li>
        )
      }, this)}
    </ul>  
  }
}

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(lang) {
    this.setState( function () {
      return {
        selectedLanguage: lang
      }
    })
  }

  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className='languages'>
        {languages.map(function(lang) {
          return (
            <li
              style={ lang === this.state.selectedLanguage ? { color: '#d0021B' }: null }
              onClick={this.updateLanguage.bind(null, lang)} 
              key={lang}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Popular