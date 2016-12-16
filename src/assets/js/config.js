/**
 * Created by Wentris on 31.03.15.
 */

$(document).ready(function () {
    $(".w-dropdown").click(function(){
        $(this).toggleClass('opened').children('ul').toggle();
    });
    $(".navbar-nav li").click(function(){
        $(this).toggleClass('opened')
    });
    $('.navbar-toggle').click(function(){
        $('.navbar-collapse .navbar-nav').toggle()
    });
    if ($('.table-Colorful tr td').length === 4) {
        $('.table-Colorful').addClass('fourColumns')
    }
    $(".showFilters").on('click', (function () {
        var counter = 1;
        return function () {
            counter += 1;
            if (counter % 2 === 0) {
                $(this).children('.help').text('Show advanced filters');
                $(this).children('.w-icons-caret').removeClass('inverse');
            }
            else {
                $(this).children('.help').text('Hide advanced filters');
                $(this).children('.w-icons-caret').addClass('inverse');
            }
        };
    }()));
   
    $('.typeFile input,.check input,.cuSelect select').styler();
    $('.typeFileAddImg input').styler({
        filePlaceholder: '',
        fileBrowse: 'ADD HERE'
    });
    $(".typeFile .jq-file__browse ").text('CHOOSE FILE');
    $(".fancybox-light").fancybox({
        openEffect	: 'fade',
        closeEffect	: 'elastic'
    });
    $(".empty-checkbox").click(function(){
        $(this).removeClass("empty-checkbox");
    });
    $('#dismiss').modal('show');
    $('#dismiss').on('shown.bs.modal', function() {
        $("body").removeClass("modal-open");
        setTimeout(function() {
            $('#dismiss').modal('hide');
        }, 15000);
    });

    //$("#checkAll").click(function(){
    //    if ($(this).attr("checked", true)) {
    //        $(".table-message .check-no-style input").attr('checked', true);
    //    }
    //    $(this).click(function(){
    //        if ($(this).attr("checked", false)) {
    //            $(".table-message .check-no-style input").attr('checked', false);
    //        }
    //
    //    });
    //    return false;
    //});
    $('#checkAll').click(function(event) {  //on click
        if(this.checked) { // check select status
            $('.table-message .check-no-style input').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"
            });
        }else{
            $('.table-message .check-no-style input').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"
            });
        }
    });



    /**
     * @param {domElement} input - The input element
     * @param {string} typeData - The type of data to be return in the event object.
     */
    //function loadFileFromInput(input,typeData) {
    //    var reader,
    //        fileLoadedEvent,
    //        files = input.files;
    //
    //    if (files && files[0]) {
    //        reader = new FileReader();
    //
    //        reader.onload = function (e) {
    //            fileLoadedEvent = new CustomEvent('fileLoaded',{
    //                detail:{
    //                    data:reader.result,
    //                    file:files[0]
    //                },
    //                bubbles:true,
    //                cancelable:true
    //            });
    //            input.dispatchEvent(fileLoadedEvent);
    //        }
    //        switch(typeData) {
    //            case 'arraybuffer':
    //                reader.readAsArrayBuffer(files[0]);
    //                break;
    //            case 'dataurl':
    //                reader.readAsDataURL(files[0]);
    //                break;
    //            case 'binarystring':
    //                reader.readAsBinaryString(files[0]);
    //                break;
    //            case 'text':
    //                reader.readAsText(files[0]);
    //                break;
    //        }
    //    }
    //}
    //function fileHandler (e) {
    //    var data = e.detail.data,
    //        fileInfo = e.detail.file;
    //
    //    img.src = data;
    //}
    //var input = document.getElementById('file1'),
    //    img = document.getElementById('img1');
    //
    //input.onchange = function (e) {
    //    loadFileFromInput(e.target,'dataurl');
    //};
    //
    //input.addEventListener('fileLoaded',fileHandler);


    $('#undismiss').modal('show');
    $('#undismiss').on('shown.bs.modal', function() {
        $("body").removeClass("modal-open");

    });

    $('#dismiss').modal('show');

     $('#dismiss').on('shown.bs.modal', function() {
        $("body").removeClass("modal-open");
         setTimeout(function() {
            $('#dismiss').modal('hide');
        }, 5000);
    });




    function readURL(input, img) {
        var url = input.value;
        var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(img).attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }else{
            $('img').attr('src', 'no_preview.png');
        }
    }
    $("#download-line li input[type='file']").change(function(){
        $(this).parents("li").addClass('removed');
    });
    $(".delete-img").click(function(){
        $(this).parents('li').removeClass('removed');
        var number = $(this).attr('id').replace('delete','');
	$("#img"+number).attr('src', '');
        $("#file"+number).val("");
    });

    $("#file1").change(function(){
        readURL(this,$("#img1"));
    });
    $("#file2").change(function(){
        readURL(this,$("#img2"));
    });
    $("#file3").change(function(){
        readURL(this,$("#img3"));
    });
    $("#file4").change(function(){
        readURL(this,$("#img4"));
    });

    $(".multi-share .shared").on('click', (function () {
        var counter = 0;
        return function () {
            counter += 1;
            if (counter % 2 === 0) {
                $(this).parent().removeClass('open');
            }
            else {
                $(this).parent().addClass('open');
            }
        };
    }()));
    $("#mail-adding").click(function (e) {
        e.preventDefault();

        var range = '<div class="form-controls" style="padding-top: 10px"><input type="email" /></div>';
        $(this).parents('form').find("#mail-container").append(range);
    });
    $("#mail-adding2").click(function (e) {
        e.preventDefault();

        var range = '<div class="form-controls" style="padding-top: 10px"><div class="col-xs-10 col-sm-11"><input type="email" name="email[]" /></div><div class="col-xs-2 col-sm-1" style="line-height:40px;"><a href="javascript:void(0);" onclick="jQuery(this).parent().parent().remove();"><span class="w-icons-delete"></span></a></div></div>';
        $(this).parents('form').find("#mail-container2").append(range);
    })

});

/* New tooltip */
$( function()
{

    var standalone = window.navigator.standalone,
        userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test( userAgent ),
        ios = /iphone|ipod|ipad/.test( userAgent );

    if( ios ) {
        $('body').css('cursor', 'pointer');
    }

    var targets = $( '[data-toggle="tooltip"], .default-tooltip, .w-icons-tooltip, .w-icons-dollar, .w-icons-flag, .h-tooltip' ),
        target  = false,
        tooltip = false,
        title   = false;

    targets.bind( 'mouseenter', function()
    {
        target  = $( this );
        tip     = target.attr( 'data-original-title' ) ? target.attr( 'data-original-title' ) : target.attr( 'title' );
        tooltip = $( '<div id="c-tooltip"></div>' );

        if( !tip || tip == '' )
            return false;

        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
            .html( tip )
            .appendTo( 'body' );

        var init_tooltip = function()
        {
            if( $( window ).width() < tooltip.outerWidth() * 2 )
                tooltip.css( 'max-width', $( window ).width() / 1.3 );
            else
                tooltip.css( 'max-width', 330 );

            var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 20;

            if( pos_left < -20 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 30;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );

            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 30;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );

            if( pos_top < 0 )
            {
                var pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );

            tooltip.css( { left: pos_left, top: pos_top } )
                .animate( { top: '+=10', opacity: 1 }, 50, function(){
                    target.addClass('tooltip-active');
                });
        };

        init_tooltip();
        $( window ).resize( init_tooltip );

        var remove_tooltip = function()
        {
            tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
            {
                $( this ).remove();
                targets.removeClass('tooltip-active');
            });

            target.attr( 'title', tip );

        };

        target.bind( 'mouseleave', remove_tooltip );
        tooltip.bind( 'click', remove_tooltip );
        target.bind('click', function(event){
            var self = $(this);
            if (!self.hasClass('tooltip-active')) {
                event.preventDefault();
            }
        });
    });
});












