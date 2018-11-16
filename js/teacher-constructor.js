'use strict';

var teacher_list = [];

var Teacher = function(teacher){
    this.image = product.image;
    this.name = product.name;
    this.subjects = product.subjects;
    this.teacher_id = product.teacher_id;
};

Teacher.prototype.toHtml = function(){
    var source = $('#teacher-template').text();
    var template = Handlebars.compile(source);
    return template(this);
};

teacher.forEach(function(teacher){
    teacher_list.push(new Teacher(teacher));
});


teacher_list.forEach(function(teacher){
    $('#teacher-listings').append(teacher.toHtml());
});