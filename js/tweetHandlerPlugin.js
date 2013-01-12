// Utility Method
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

(function($, window, document, undefined) {


	var TweetHandler = {

		init: function(options) {
			this.url = "http://search.twitter.com/search.json";
			
		},
	};


	/**
	* Use Prototypal inheritance to reduce stress on large number of
	* of calling nodes. Initiate global options.
	**/
	$.fn.tweetHandler = function( options ) {
		return this.each(function() {
			var instance = Object.create(TweetHandler);

			instance.init( options, this );

			//option to return instance for editing
		})
	};

	// Mutable Options Here instead of only using instance vars
	$.fn.tweetHandler.options = {
	};
})(jQuery, window, document);