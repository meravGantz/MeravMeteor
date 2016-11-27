import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Todos} from '../../Collections/Todos/todos';
import Test from '../Test.jsx';
function composerFunction(props, onData){
    let handle;
    let todos;
    console.log("Message Container");
    //Should retreive all not responded msg's from server.

    console.log("communication inside");
    handle = Meteor.subscribe('allTodos');
    if (handle.ready()){
        todos = Todos.findOne({});
        onData(null, {todos});
    }
}

export default composeWithTracker(composerFunction)(Test);