import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

export const AuthContext = React.createContext(false);



class App extends PureComponent {
  constructor(props){
    super(props);
    console.log("[App.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: '1', name: 'Nik', age: 28 },
        { id: '2', name: 'Rob', age: 25 },
        { id: '3', name: 'Britt', age: 26 }
      ],
      showPersons: false,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Insisde componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Insisde componentDidMount()");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE App.js] INSIDE shouldComponentUpdate", nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Insisde componentDidMount()", nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("[UPDATE App.js] Insisde getDerivedStateFromProps()", nextProps, prevState);
  }

  getSnapshotBeforeUpdate() {
    console.log("[UPDATE App.js] Insisde getSnapshotBeforeUpdate()");
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Insisde componentDidMount()");
  }


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

  loginHandler = () => {
    this.setState( {authenticated: true} )
  };

  render() {
    console.log("[App.js] Inside render()");
    let persons = null;

    if(this.state.showPersons){
        persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangeHandler}
                />;
    }

    return (
        <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            persons={this.state.persons}
            showPerson={this.state.showPersons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
            title={this.props.title}
          />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
