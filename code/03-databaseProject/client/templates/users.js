import {Template} from 'meteor/templating';

import "./users.html";

Template.users.helpers({
    users: function () {
        //返回静态数据
        return [
            {name: 'hello', age: 20},
            {name: 'world', age: 22},
        ];
    }
});