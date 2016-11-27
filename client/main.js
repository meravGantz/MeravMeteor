import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import HelloWorld from '/imports/ui/HelloWorld.jsx';
import '../imports/Collections/Todos/methods';
Meteor.startup(()=> {
    render(<HelloWorld />, document.getElementById("react-root"));
});

