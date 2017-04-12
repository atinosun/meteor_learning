import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';


Template.localhelper.helpers({
    name: 'atino',
    image: {
        alt: '图片描述',
        src: '/466130ccx8053d022a30f&690.gif',
    },
    skills: ['JavaScript', 'CSS', 'HTML'],
    hasMore: function (skills) {
        return skills && skills.length > 1;
    }
});



Template.localhelper.events({
    'click a': function (event, template) {
        event.preventDefault();
        alert(1);
    }
})
;