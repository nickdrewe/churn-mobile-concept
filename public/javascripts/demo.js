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

//show saved alert and face
function showSaved(){
	$('.modal-save').hide();
	$('.modal-new').hide();
	$('.saved-outer').css('display', 'table').delay(500).fadeOut();;
}

