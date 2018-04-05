import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Nik', age: 28 },
            { id: '2', name: 'Rob', age: 25 },
            { id: '3', name: 'Britt', age: 26 }
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // this.state.persons[0].name = 'Nikolas'; DO NOT DO THIS!!!
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Rob', age: 25 },
                { name: 'Britt', age: 26 }
            ]})
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
           return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} )

    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice()
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState( {persons: persons} );
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( {showPersons: !doesShow} )
    };

  render() {
    let persons = null;

    if(this.state.showPersons){
        persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangeHandler}
                />;
    }

    return (
        <div className={classes.App}>
          <Cockpit
            persons={this.state.persons}
            showPerson={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
