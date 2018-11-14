'use strict';

function setUpSubjectFilter() {
    var subjects;
    var subjectList = [];
    $('.teacher').each(function() {
        subjects = $(this).attr('data-subjects').split(',');
        subjects.forEach(function(subject) {
            if(subjectList.indexOf(subject) < 0) {
                subjectList.push(subject);
            }
        });
    });
    subjectList.sort();
    subjectList.forEach(function(subject) {
        var optionTag = `<option value="${subject}">${subject}</option>`;
        $('#subject-filter').append(optionTag);
    });
};

function handleSubjectFilter() {
    $('#subject-filter').on('change', function() {
        if($(this).val()) {
            $('.teacher').hide();
            $(`.teacher[data-subjects*="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.teacher').fadeIn();
        }
    });
};

setUpSubjectFilter();
handleSubjectFilter();