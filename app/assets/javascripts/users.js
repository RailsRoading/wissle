$(document).ready(function() {
  $('#form-user').submit(function(e) {
    e.preventDefault();

    createUser($(this).children('[name=username]').val(),
               $(this).children('[name=age]').val(),
               function() {
                 window.location.replace('/tags');
               })
  });
});
