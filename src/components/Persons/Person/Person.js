import React, { PureComponent } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import { AuthContext } from "../../../containers/App";

class Person extends PureComponent {

  constructor(props) {
    super(props);
    console.log("[Person.js] INSIDE CONSTRUCTOR");
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] INSIDE WILLMOUNT()");
  }

  componentDidMount() {
    console.log("[Person.js] INSIDE DIDMOUNT()");
    if(this.props.position === 0)
      this.inputElement.current.focus();
  }

  componentWillReceiveProps(nextProps){
    console.log("[Person.js] INSIDE WILLRECEIVEPROPS()", nextProps);
  }


  componentWillUpdate(nextProps, nextState) {
    console.log("[Person.js] INSIDE componentWillUpdate()", nextProps, nextState);
  }

  componentDidUpdate(){
    console.log("[Person.js] INSIDE componentDidUpdate()");
  }

  render () {
    return(
        <Aux>
          <AuthContext.Consumer>
            {auth => auth ? <p>I'm authenticated!</p> : null}
          </AuthContext.Consumer>
          <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input
              ref={this.inputElement}
              type={'text'}
              onChange={this.props.changed}
              value={this.props.name} />
        </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed:PropTypes.func
};

export default withClass(Person, classes.Person);