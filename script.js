$(document).ready(function(){
    $('.target-burger').click(function(e){
        $('.main-nav, .target-burger').toggleClass('toggled');
        e.preventDefault();
    });//target-burger-click
});//doc-rdy