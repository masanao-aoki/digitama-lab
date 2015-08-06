var $ = require('jquery');

$(function(){
    setTimeout(function(){
        $('body').addClass('ac');
	    setTimeout(function(){
	    	$('body').addClass('end')
	    },800);
    },300);

});