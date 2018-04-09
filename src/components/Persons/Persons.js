import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent{
  constructor(props) {
    super(props);
    console.log("[Persons.js] INSIDE CONSTRUCTOR");
  }

  componentWillMount() {
    console.log("[Persons.js] INSIDE WILLMOUNT");
  }

  componentDidMount() {
    console.log("[Persons.js] INSIDE DIDMOUNT");
  }

  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE Persons.js] INSIDE willReceiveProps(nextProps)", nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] INSIDE shouldComponentUpdate()", nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //       nextProps.clicked !== this.props.clicked ||
  //       nextProps.changed !== this.props.changed;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Persons.js] INSIDE componentWillUpdate()", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[Persons.js] INSIDE componentDidUpdate()");
  }

  render(){
    console.log("[Persons.js] INSIDE RENDER");
    return this.props.persons.map((person, index) => {
      return <Person
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
      />
    });
  }
}

export default Persons;