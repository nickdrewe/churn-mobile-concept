//use fastclick
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

//show save dialog
function showSave(){
	$('.modal-save').css('display', 'block');
}

function showNew(){
	$('.modal-new').css('display', 'block');
	$('.modal-save').hide();
}

//show saved alert and fade
function showSaved(){
	$('.modal-save').hide();
	$('.modal-new').hide();
	$('.alert-outer').css('display', 'table').delay(500).fadeOut();
	$('.saved').css('display', 'inline-block').delay(500).fadeOut();
}

//show saved alert and fade
function showFailed(){
	$('.modal-save').hide();
	$('.modal-new').hide();
	$('.alert-outer').css('display', 'table').delay(1500).fadeOut();
	$('.failed').css('display', 'inline-block').delay(1500).fadeOut();
}


