$('.full').css({"min-height": $(window).height(), "max-width": $(window).width()});
function userTimeStamp(x) {
    var d = new Date(Number(x));
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    var publishedOn = hour + ":" + minute + ":" + second;
    return publishedOn;
}
var fontCheck = function () {
    var fontClasses = ['open-sans', 'montserrat', 'roboto', 'quicksand'];
    fontClasses.forEach(function(name){
        $('*').each(function(){
            if ($(this).hasClass(name)){
                $(this).css({'font-family': name.replace('-', ' '),'font-weight': '200'});
            }
        })
    });
}
var addHeader = function(place, classes){
    $(place).prepend('<div class="display-4 open-sans">Hello, <span class="username"></span>!</div>');
    $('.username').parent().addClass(classes);
    // <= 550, add 'float-left'
    // else, add 'text-center p-5'
}
var themeCheck = function() {
    var newClass, oldClass;
    if($('body').hasClass('bg-dark')) {
        $('.modal-content').addClass('bg-dark');
        $('body').addClass('text-white-50');
        $('.btn').each(function(){
            $(this)[0].classList.forEach(function(existingClass){
                if(existingClass.substr(0,11) == 'btn-outline'){
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
                if(existingClass.substr(0,11) == 'btn-outline'){
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
    if(inputVal == "bg-dark"){
        $('body').addClass('bg-dark');
    } else {
        $('body').removeClass('bg-dark')
    }
    themeCheck()
}
var initializeChat = function () {
    if($('body').find('main').length == 1){
        $('main').prepend('<div class="allModals"><div class="modal fade" id="settings" tabindex="-1" role="dialog" aria-labelledby="settingsLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h1 class="modal-title" id="settingsLabel">Settings</h1><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body text-center"><h3 class="p-3 mt-3">Background Theme</h3><div class="btn-group bg_theme-group" role="group"><button class="btn btn-light" id="theme_light">Light</button><button class="btn btn-dark" id="theme_dark">Dark</button></div><h3 class="p-3 mt-3">Chat Theme</h3><div class="btn-group chat_theme-group flex-wrap" role="group"><button class="btn btn-light">Lightblue</button><button class="btn btn-light">Darkblue</button><button class="btn btn-light">Teal</button><button class="btn btn-light">Purple</button><button class="btn btn-light">Lavender</button><button class="btn btn-light">Lightgreen</button><button class="btn btn-light">Orange</button><button class="btn btn-light">Yellow</button><button class="btn btn-light">Red</button></div><div class="m-5 p-3 card-body text-left" id="theme_viewer"><div><p class="float-left">This is my text</p></div><div><p class="float-right">This is your text</p></div><div><p class="float-left">Still mine. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div><div><p class="float-right">Yours on and on and on....Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div></div></div><div class="modal-footer"><button class="btn btn-outline-danger float-left" type="button" id="logout"><i class="fa fa-power-off"></i> Log out</button><button class="btn btn-outline-danger float-left" type="button" id="clear_chat"><i class="fa fa-bomb"></i> Clear chat</button></div></div></div></div><div class="modal fade" id="message_setting" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-sm" role="document"><div class="modal-content"><div class="modal-body text-center"><button class="btn btn-outline-danger btn-block"><i class="fa fa-trash"></i> Delete message</button><button class="btn btn-outline-primary btn-block"><i class="fa fa-copy"></i> Copy text</button></div></div></div></div></div><div class="row"><div class="col-md-2"></div><div class="col-md-8"><div class="card my-3"><div class="card-header"><div class="clearfix"><button class="btn btn-outline-dark float-right" type="button" data-toggle="modal" data-target="#settings"><i class="fa fa-gear"></i></button></div></div><div class="card-body"><div class="p-3" id="chat_body"><fieldset><legend>The beginning</legend></fieldset></div></div><div class="card-footer"><div class="input-group"><input type="text" class="form-control" placeholder="Write a message" id="message"><div class="input-group-append"><button class="btn btn-outline-success" type="submit" id="send_message"><i class="fa fa-send"></i></button></div></div></div></div></div></div>');
        $('.card').css({"height": $(window).height()});
    }
    chatThemeCheck();
    themeCheck();
    if ($(window).width() <= 550) {
        $('#chat_body').css({"height": ($(window).height() - 50 - $('.card-header').height() - $('.card-footer').height())});
        $('body').css('overflow', 'hidden');
        $('.chat_theme-group .btn').addClass('btn-block');
        $('#message').on('focusin', function () {
            $(this).parents('.card-footer').addClass('fixed-bottom');
        });
        $('#message').focusout(function(){
            $(this).parents('.card-footer').removeClass('fixed-bottom');
        });
        $('#chat_body').parent().addClass('p-0');
        $('.card').removeClass('my-3');
        addHeader('.card-header', 'float-left');
    } else {
        $('#chat_body').css({"height": ($(window).height() - 90 - $('.card-header').height() - $('.card-footer').height())});
        $('main').addClass('container-fluid');
        addHeader('main', 'text-center p-5');
        $('#message').on('focus', function(){
            $(this).keydown(function(button){
                if(button.key == "Enter"){
                    $('#send_message').trigger('click');
                }
            })
        })
    }
}
var chatThemeCheck = function(inputVal) {
    $('.chat_theme-group button').on('click', function(){
        $('.chat_theme-group button').each(function(){
            var oldClass = $(this).text().toLowerCase() + "-theme";
            if($('#theme_viewer, #chat_body').hasClass(oldClass)){
                $('#theme_viewer, #chat_body').removeClass(oldClass);
            }
        });
        $('#theme_viewer, #chat_body').addClass($(this).text().toLowerCase() + "-theme");
    });
    if(inputVal){
        $('#chat_body').addClass(inputVal);
    }
}
var authenticate = function(){
    $('body').prepend('<div class="row" id="login_main"><div class="col-md-4"></div><div class="col-md-4 center-pad" style="animation: .5s fadein ease-in;-webkit-animation: .5s fadein ease-in;"><div class="form-group"><input class="form-control" type="text" placeholder="Username" id="login_username"></div><div class="form-group"><input class="form-control" type="password" placeholder="Password" id="login_password"></div><button class="btn btn-outline-primary btn-block" type="button" id="login_submit">Login</button></div></div>');
    $('.center-pad').css('padding-top', $(window).height()/2.5);
    $('#login_submit').on('click', function () {
        $(this).prepend('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ').prop('disabled', true);
        authRoot.signInWithEmailAndPassword($('#login_username').val(), $('#login_password').val()).then(function () {
            $('#login_submit').prop('disabled', false).children('span').remove();
            $('#login_main').hide("slow", function () {
                $('#login_main').remove()
            });
        }).catch(function (e) {
            $('#login_submit').prop('disabled', false).children('span').remove();
            $('#login_submit').after('<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert"><strong>Hold on right there boy.</strong> Seems like you got yourself into trouble because - ' + e.message + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        });
    })
}