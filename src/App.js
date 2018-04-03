import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'


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
    let btnClass = '';

    if(this.state.showPersons){
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return(
                        <Person
                            click={() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                        />
                        )
                })}
            </div>
        );
        btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi! I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
              className={btnClass}
              onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;