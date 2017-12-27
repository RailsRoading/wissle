$(document).ready(function() {
  if (window.location.pathname == "/tags") {
    var all_tags = [];
    var selected_tag_ids = [];
    $.ajax({
      url: "/api/tags",
      dataType: "json",
      contentType: "json",
      headers: {
        "Authorization": window.localStorage.getItem("user.uuid")
      },
      success: function(data) {

        for (var i = 0; i < data.length; i++) {
          all_tags.push({
            label: data[i].data.title,
            value: data[i].data.title,
            id: data[i].data.id

          });
        }

        for (var i = 0; i < $(".switchclass").length; i++) {
          $($(".switchclass")[i]).parent().parent().find("p").first().text(data[i].data.title);
          $($(".switchclass")[i]).attr("data-id", data[i].data.id);
        }

        $(".switchclass").click(function() {
          if ($(this).is(":checked")) {
            selected_tag_ids.push($(this).attr("data-id"))
          } else {
            var index = selected_tag_ids.indexOf($(this).attr("data-id"));
            selected_tag_ids.splice(index, 1);
          }
        });

        $("#tags").autocomplete({
          source: all_tags,
          focus: function(event, ui) {
            selected_tag_ids.push(ui.item.id);
          },
        });
        $(".start_wissle").click(function() {
          $.ajax({
            url: "/api/users/" + window.localStorage["user.id"],
            dataType: "json",
            contentType: "application/json",
            method: "PATCH",
            headers: {
              "Authorization": window.localStorage["user.uuid"]
            },
            data: JSON.stringify({
              data: {
                tags: selected_tag_ids,
              }
            }),
            success: function(data) {
              window.location.replace("/map");
            },
            error: function(error) {
              handleApiError(error);
            }
          });
        });
      }, //closes success
      error: function(error) {
        handleApiError(error);
      }
    }); //ajax call
  }
}) //document ready
