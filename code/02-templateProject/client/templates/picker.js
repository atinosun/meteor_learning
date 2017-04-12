import {Template} from 'meteor/templating';

import './picker.html';

Template.picker.onRendered(function(){
    //初始化datetimepicker
    $('.datetimepicker').datetimepicker({
        timeZone: 'Asia/Shanghai',
        useCurrent: true,
    });
});

Template.picker.events({
    'click button': function (event, template) {
        event.preventDefault();

        var picker = $('.datetimepicker');
        //获取datetimepicker的值
        var dateTime = picker.data('DateTimePicker'.date());

        //格式化日期格式

        var ret = dateTime.format('MMMM Do YYYY, h:mm:ss a');
        alert(ret);
    },
});
