$(document).ready(function() {
  $('#form-wissle').submit(function(e) {
    e.preventDefault();

    createWissle(
      $(this).children('[name=text]').val(),
      function() {
        $(this).children('[name=text]').val('');
        $('#modal-create-wissle').foundation('close');
      });
  });
});
