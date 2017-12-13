// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){
  $(document).foundation();

  createUser();
});

function getTags() {
  $.ajax({
    url: '/api/tags',
    dataType: 'json',
    contentType: 'json',
    headers: {
      'Authorization': '96e27e6a-c0c3-4d26-9a9b-5dc367a118fe'
    },
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.log(error)
    }
  })
}
