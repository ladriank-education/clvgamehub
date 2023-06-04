(function($) {
    $.fn.isNumber = function(str) {
        return !isNaN(str)
    };
})(jQuery);


(function($) {
    $.fn.hasNumbers = function(str) {
        return /\d/.test(str);
    };
})(jQuery);

(function($) {
    $.fn.hasLength = function(str, length) {
        return str.length == length
    };
})(jQuery);

(function($) {
    $.fn.isBetween = function(str, min, max) {
        return (str.length > min) && (str.length<=max)
    };
})(jQuery);

(function($) {
    $.fn.isBlank = function(str) {
        return (str.trim().length == 0)
    };
})(jQuery);

(function($) {
    $.fn.passMinRequirements = function(str) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(str)
    };
})(jQuery);

(function($) {
    $.fn.getSession = function(variable) {
        localStorage.getItem(variable)
    };
})(jQuery);

(function($) {
    $.fn.setSession = function(variable, value) {
        localStorage.setItem(variable, value)
    };
})(jQuery);