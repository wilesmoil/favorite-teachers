'use strict';

$('#search').on('submit', function(event) {
    event.preventDefault();
    $('.teacher').hide();
    var lookup = $('#lookup').val().toLowerCase();
    teacher_list.forEach(function(teacher) {
        if(teacher.name.toLowerCase().indexOf(lookup) >= 0) {
            $(`.teacher[data-id="${teacher.teacher_id}"]`).fadeIn();
        }
    });
});