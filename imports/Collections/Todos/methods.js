import {Meteor} from 'meteor/meteor';
import {Todos} from './todos';

Meteor.methods({
   insertTodo(name) {
       Todos.insert({name: name});
   }
});