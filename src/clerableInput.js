/**
 * Created by Doniyor Mamatkulov.
 */

(function( $ ){

    $.fn.clearableInput = function(options) {

        var settings = $.extend( {
            'location'         : 'top',
            'background-color' : 'blue'
        }, options);

        $(".ciInputIcon").on('click', function (e) {
            e.preventDefault();
            $(".ciInput").val('');
            $(this).css('display', 'none');
        });

        if($(".ciInput").val()) { //if the input has value
            //input has value
            $(".ciInputIcon").css('display', 'block');
        } else {
            //input has no value
            $(".ciInputIcon").css('display', 'none');
        }

        if(settings['type'] == 'numeric') {
            $(this).keyup(function() {
                var ciVal = $(this).val();
                $(this).val((ciVal.replace(/[^0-9\.]/g, '')));
            });
        }

        $(".ciInput").change(function() {
            if(settings['type'] == 'numeric') {
                $(this).keyup(function() {
                    var ciVal = $(this).val();
                    $(this).val((ciVal.replace(/[^0-9\.]/g, '')));
                });
            }

            if($(this).val()) { //if the input has value
                //input has value
                $(".ciInputIcon").css('display', 'block');
            } else {
                //input has no value
                $(".ciInputIcon").css('display', 'none');
            }
        });

    };
})( jQuery );
