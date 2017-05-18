import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './tasks.js'
import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: {createdAt: -1} }); 
  },
});

Template.body.events({
  'submit .new-task'(event) {
    // Present defult browser from submit
    event.preventDefault();
    
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    
    // Insert a task into the Collection
    Tasks.insert({
      text,
      createdAt: new Date(),
    });
    
    // Clear from
    target.text.value = '';
  },
});