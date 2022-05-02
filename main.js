$(function () {
  $("#btn").click(function () {
    var cock = $("#cock").val();
    var avatar = $('#avatar').val();
    var username = $("#username").val();
    var content = $("#content").val();
    if ((cock == null || cock == "", content == null || content == "")) {
      alert("Please Fill Out All The Fields");
      return false;
    }
    $.post(cock, { content: content, username: username, "avatar_url": avatar, });
  });
});
