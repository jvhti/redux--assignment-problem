import React, {Component} from 'react';
import {connect} from "react-redux";

import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        }
        this.props.onPersonAdded(newPerson);
    }

    render() {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler}/>
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    persons: state.persons
});

const mapDispatchToProps = (dispatch) => {
    return {
        onPersonAdded: (person) => dispatch({type: actionTypes.ADD_PERSON, payload: person}),
        onPersonDeleted: (id) => dispatch({type: actionTypes.DELETE_PERSON, id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
