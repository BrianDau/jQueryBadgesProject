$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/BlueStarBrian.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var $badges = $('#badges');
      console.log(response.courses.completed);
      response.courses.completed.forEach(function(course) {
        var $course = $('<div />', {
          'class': 'course'
        }).appendTo($badges);

        $('<h3 />', {
          text: course.title
        }).appendTo($course);

        $('<img />', {
          src: course.badge
        }).appendTo($course);

        $('<a />', {
          href: course.url,
          target: '_blank',
          'class': 'btn btn-primary',
          text: 'See Course'
        }).appendTo($course);
      })

    }
  });
});
