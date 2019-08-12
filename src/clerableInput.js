/**
 * Created by Doniyor Mamatkulov.
 */

(function( $ ){

    $.fn.clearableInput = function() {

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

        $(".ciInput").change(function() {
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