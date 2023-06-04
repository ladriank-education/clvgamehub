$("#form-login").on("submit", function(event) {
   event.preventDefault()
   params = {nickname: $("#nickname").val(), pwd: $.fn.md5($("#password").val())}
   status = $.fn.apiGetStatusCode('user', params, function (statusCode) {
      if (statusCode==200)
         alert("logeado UwU")
      else
         alert("nope! ÒwÓ")
   })
   
});