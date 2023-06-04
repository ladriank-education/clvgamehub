// validations
// nickname
(function($) {
    $.fn.validateNickname = function(callback) {
        if (!$.fn.isBetween($("#nickname").val(), 4, 20)) {
            $("#nickname-error").text("El nombre de usuario debe tener entre 5 y 20 (inclusive) caracteres")
            $("#nickname-error").show()
            callback(false)
        } else {
            params = {nickname: $("#nickname").val()}
            user = $.fn.apiGetStatusCode('user', params, function (statusCode) {
                if (statusCode==200) {
                    $("#nickname-error").text("Este nombre de usuario ya está registrado.")
                    $("#nickname-error").show()
                    callback(false)
                }
                else {
                    $("#nickname-error").hide()
                    callback(true)
                }
            })
        }
    };

})(jQuery);


// first password
(function($) {
    $.fn.validateFirstPassword = function() {
        var valid=false;
        if(!$.fn.isBetween($("#password").val(), 7, 25) || !$.fn.passMinRequirements($("#password").val())) {
            $("#password-error").html("La contraseña debe cumplir con los requisitos mínimos obligatorios: <ul><li>Al menos 1 letra mayúscula.</li><li>Entre 8 y 25 (inclusive) caracteres.</li>")
            $("#password-error").show()
        } else {
            $("#password-error").hide()
            valid=true;
        }
        return valid;
    };
})(jQuery);

// second password
(function($) {
    $.fn.validateSecondPassword = function() {
        var valid = false;
        if ($("#password").val() != $("#password-2").val()) {
            $("#password-2-error").text("Las contraseñas no coinciden.")
            $("#password-2-error").show()
        } else {    
            $("#password-2-error").hide()
            valid=true;
        }
        return valid;
    }
})(jQuery);


// events
(function($) {
    $.fn.registerUser = function(callback) {
        $.ajax({
            method: "POST",
            url: 'http://80.30.41.125/api/user',
            data: {nickname: $("#nickname").val(), pwd: $.fn.md5($("#password").val())},
            complete: function(xhr) {
                callback(xhr);
            }
        })

    };
})(jQuery);

$(document).ready(function(e) {
    $("#nickname-error").hide()
    $("#password-error").hide()
    $("#password-2-error").hide()

    $("#nickname").on("blur", function(event) {
        $.fn.validateNickname(function(valid) {
        });
    });

    $("#password").on("blur", function(event) {
        $.fn.validateFirstPassword();
    });

    $("#password-2").on("blur", function(event) {
        $.fn.validateSecondPassword();
    });

    $("#submit").click(function() {
        $.fn.validateNickname(function(valid) {
            if (valid && $.fn.validateFirstPassword() && $.fn.validateSecondPassword()) {
                $.fn.registerUser(function(xhr) {
                    if (xhr.status == 200) {
                        console.log(xhr.response.id)
                        console.log(xhr.response.nickname)
                        // $.fn.setSession('uid', xhr.user.id)
                        $(location).prop('href','http://80.30.41.125/');
                    } else {
                        alert("Wtf algo paso T.T");
                    }
                });
            } else {
                alert("WTF RELLENA ALGO BOBO");
            }
        });
    });
})