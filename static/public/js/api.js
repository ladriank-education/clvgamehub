(function($) {
	$.fn.apiGetStatusCode = function(endpoint, params, callback) {
		$.ajax({
			method: "GET",
			url: `http://80.30.41.125/api/${endpoint}`,
			data: params,
			complete: function(xhr) {
				callback(xhr.status);
			}
		})

	};
})(jQuery);

(function($) {
	$.fn.apiGetJsonData = function(endpoint, params, callback) {
		$.ajax({
			method: "GET",
			url: `http://80.30.41.125/api/${endpoint}`,
			data: params,
			dataType: "json",
		})
		.always(function(data) {
			callback(data)
		})
	};
})(jQuery);