$('.full').css({"min-height": $(window).height(), "max-width": $(window).width()});
$('#chat_body').css('height', $(window).height()/2);
var fontClasses = ['open-sans', 'montserrat', 'roboto', 'quicksand'];
var newClass, oldClass;
var fontCheck = function () {
    fontClasses.forEach(function(name){
        $('*').each(function(){
            if ($(this).hasClass(name)){
                $(this).css({'font-family': name.replace('-', ' '),'font-weight': '200'});
            }
        })
    });
}
var themeCheck = function() {
    if($('body').hasClass('bg-dark')) {
        $('.modal-content').addClass('bg-dark');
        $('body').addClass('text-white-50');
        $('.btn').each(function(){
            $(this)[0].classList.forEach(function(existingClass){
                if(existingClass.substr(0,11) === 'btn-outline'){
                    oldClass = existingClass;
                    newClass = existingClass.replace('-outline','') + ' text-white';
                }
            })
            if ($(this).hasClass(oldClass)) {
                switch (oldClass) {
                    case oldClass:
                        $(this).addClass(newClass)
                        break;
                }
            }
        });
    } else {
        $('.modal-content').removeClass('bg-dark');
        $('body').removeClass('text-white-50');
        $('.btn').each(function(){
            $(this)[0].classList.forEach(function(existingClass){
                if(existingClass.substr(0,11) === 'btn-outline'){
                    oldClass = existingClass;
                    newClass = existingClass.replace('-outline','') + ' text-white';
                }
            })
            if ($(this).hasClass(oldClass)) {
                switch (oldClass) {
                    case oldClass:
                        $(this).removeClass(newClass)
                        break;
                }
            }
        });
    }
}
var getTheme = function(inputVal) {
    if(inputVal === "bg-dark"){
        $('body').addClass('bg-dark');
    } else {
        $('body').removeClass('bg-dark')
    }
    themeCheck()
}
$(document).ready(function(){
    fontCheck();
    themeCheck();
});