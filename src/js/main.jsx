import $ from 'jquery'
import parallax from 'jquery.scroll-parallax'

"use strict";


$(function(){
    //
    // $.parallax({
    // 	stage: window,
    // 	direction: 'y',
    // 	debugMode: true
    // });
    //
    // $.parallaxTiming({
    // 	timingLinePercent: 50
    // });
    //
    // $('body h1').parallaxSpeed({
    // 	style: 'top',
    // 	speed: 2,
    // 	min: -999999,
    // 	max: 999999,
    // 	fixStyleValue: String(0),
    // 	fixScrollPosition: 0
    // });



    let $articlItem = $('.js-article-item');
    let articleHoverClassName = 'js-article-hover';

    let articleHoverClassChenge = function(classArray, _this) {
        $articlItem.removeClass(articleHoverClassName);
        var count = 0;
        classArray.forEach(function(value){
            if( value === articleHoverClassName ) {
                _this.removeClass(articleHoverClassName);
                return false;
            } else {
                if( count === (classArray.length - 1) ) {
                    _this.addClass(articleHoverClassName);
                }
            }
            count++;
        });
    };

    $articlItem.on({
        mouseenter: function(e){ articleHoverClassChenge(e.target.className.split(' '),$(this)); },
        mouseleave: function(e){ articleHoverClassChenge(e.target.className.split(' '),$(this)); }
    });


    setTimeout(function(){
        $('body').addClass('ac');
	    setTimeout(function(){
	    	$('body').addClass('end');
	    },800);
    },300);

});
