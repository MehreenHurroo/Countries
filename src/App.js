
import './App.css';
import react from 'react'
import React, {Component} from 'react';
import Contacts from './Contacts.js'
class App extends Component {
  render() {
      return (
        <div className="app">    {/*for css*/}
        <div className="appBody">
          <Contacts contacts={this.state.contacts} /> {/*state is used so that we can pass arrays containing data in Json  to a component called Contacts*/}
          </div>
          </div>
         

      )
  }
/*set contacts as array since we will pass data into it*/
  state = {
      contacts: [] 
  };

  componentDidMount() {
      fetch('http://universities.hipolabs.com/search?country') /*get api */
          .then(res => res.json())
          .then((data) => {
              this.setState({ contacts: data })    /*change prev state to new state containing all data from json file*/
          })
          .catch(console.log)
  }
}

export default App;

      