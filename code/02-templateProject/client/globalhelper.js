import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';
//判断是否为客户端
if (Meteor.isClient) {
    //注册全局helper
    Template.registerHelper('isLogin', function () {
        var flag = false;
        //逻辑处理
        return flag;
    });
}

Template.outside.events({
    'click button': function (event, template) {
        alert('outside');
        $('body').css('background-color', 'red');
    }
});

Template.inside.events({
    'click button': function (event, template) {
        alert('inside');
        //stopImmediatePropagation();
        //event.stopImmediatePropagation();
        $('body').css('background-color', 'green');
        //stopImmediatePropagation();
    }
})