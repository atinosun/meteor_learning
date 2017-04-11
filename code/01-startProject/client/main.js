import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
    this.item = new ReactiveVar(1);
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    item(){
        return Template.instance().item.get();
    }
});

Template.info.onCreated(function infoOnCreated() {
    this.infotext = new ReactiveVar(1);
});

Template.info.helpers({
    infotext(){
        return Template.instance().infotext().get();
    },
});

Template.hello.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
        instance.item.set(instance.item.get() + 1);
    },
});

Template.info.events({
    'click button'(event,instance){
        instance.infotext.set(instance.infotext.get()+10);
    },
});
