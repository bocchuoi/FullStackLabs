import React from 'react';
import axios from 'axios';
import './App.css';
import PersonDetails from './PersonDetails';

class PersonList extends React.Component {
  state = {
    persons: []
  }

    //Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
    .then(res => {
        const persons = res.data.results;
        console.log(persons);
        this.setState({ persons });
    })
    
  }


  render() {

    return (
      <div>
        <div class="bg-success text-center"><h1>User List</h1></div>
        {this.state.persons.map(p => {
          return <PersonDetails key={p.login.username} person={p}/>
        })}
      </div>
      
    )
  }
}

export default PersonList;

// address={p.location}
// name={p.name}
// gender={p.gender}
// time={p.location.timezone}
// username={p.login.username}
// dob={p.dob}
// phone={p.cell}
// registeredDate={p.registered}
// picture={p.picture}
// email={p.email}/>