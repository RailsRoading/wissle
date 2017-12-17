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
        for (var i = 0; i < $(".tag-div").length; i++) {
          $(".tag-div")[i].children[0].innerHTML = (data[i].data.title);
          $($(".tag-div")[i].children[1]).attr("id", data[i].data.id);
          data.splice(i, 1);
        }

        for (var i = 0; i < $(".tag-button").length; i++) {
          $($(".tag-button")[i]).text(data[i].data.title);
        }

        $("#tags").autocomplete({
          source: all_tags,
          focus: function(event, ui) {
            selected_tag_ids.push(ui.item.id);
          },
        });

        $(".clickable").click(function() {
          selected_tag_ids.push(this.id);
          this.setAttribute("disabled", "true");
          if ($(this).attr("disabled") == "disabled") {
            $(this).removeAttr("disabled");
          }
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
              showAlert(error);
            }
          });
        });
      }, //closes success
      error: function(error) {
        showAlert(error);
      }
    }); //ajax call
  }
}) //document ready
