'use strict';

var REPLACE1 = [];

var REPLACE2 = function(teacher){
    
};

REPLACE2.prototype.toHtml = function(){
    var source = $('#teacher-template').text();
    var template = Handlebars.compile(source);
    return template(this);
};

teachers.forEach(function(REPLACE3){
    REPLACE1.push(new REPLACE2(REPLACE3));
});


REPLACE1.forEach(function(REPLACE3){
    $('#teacher-listings').append(REPLACE3.toHtml());
});