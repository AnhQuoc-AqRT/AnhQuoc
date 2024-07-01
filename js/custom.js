// JavaScript Document
$(document).ready(function(){
  $("#btn-toggle").click(function(){
    $(".menu").slideToggle("slow");
	$(".icon-menu").slideToggle("slow");
  });
	
	$("#btn-1").click(function(){
    	$("#drop-1").slideToggle();
		$("#drop-2").slideUp();
	 });
	
		$("#btn-2").click(function(){
    	$("#drop-2").slideToggle();
		$("#drop-1").slideUp();
	 });
	
	
});





