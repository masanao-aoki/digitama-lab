import $ from 'jquery'

"use strict";

console.log('nnn');

$(function(){
    setTimeout(function(){
        $('body').addClass('ac');
	    setTimeout(function(){
	    	$('body').addClass('end')
	    },800);
    },300);

});
