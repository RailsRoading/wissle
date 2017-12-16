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

function showWissle(id) {
  var $modal = new Foundation.Reveal($('#modal-show-wissle'));

  getWissle(id, (wissle) => {
    $modal.open();

    $('#modal-show-wissle-text').html(wissle.text);
    $('#modal-show-wissle-user').html(wissle.user.data.username + ' (' + wissle.user.data.age + ')')
    $('#modal-show-wissle-latitude').html(wissle.latitude);
    $('#modal-show-wissle-longitude').html(wissle.longitude);
  })
}
