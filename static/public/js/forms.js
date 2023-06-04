/**
 * 
 * field - jquery selector
 * 
 **/

(function($) {
    $.fn.isEmpty = function(field) {
        return $.fn.isBlank($(field).val())
    };
})(jQuery);