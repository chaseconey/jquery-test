$(document).ready(function() {
    //if js is loaded on machine, add js class for form
    $("#content").addClass("js");
    
    
    var contactForm = {
    
        container: $("#contact"),
        config: {
            effect: "fadeToggle",
            speed: 500
        },
        
        init: function(config) {
            $.extend(this.config, config);
        
            $('<button></button>', {
                text: 'Contact Me'
            })
			.insertAfter( 'article:first' )
            .on("click", this.show);
            
        }, 
        
        show: function() {
            var cf = contactForm,
                container = cf.container,
                config = cf.config;
                
            if( container.is(":hidden")) {
                cf.close.call(container);
                container[config.effect](config.speed);
            }
        },
        
        close: function() {
            var $this = $(this);
            var config = contactForm.config;
            
            if( $this.find(".close").length ) return;
            //add close button
            $("<span></span>", {
                text: "X",
                class: "close"
            })
            .prependTo("#contact")
            .on("click", function() {
                $this[config.effect](config.speed);
            })
        }
    }
    
    contactForm.init({
        effect: "slideToggle", 
        speed: 250});
});