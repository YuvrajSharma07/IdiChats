const authRoot = firebase.auth();
const dbRoot = firebase.database();
authRoot.onAuthStateChanged(function (user) {
    if (user) {
        $('body').prepend('<main></main>');
        initializeChat();
        var userId = user.uid;
        var username = user.displayName;
        if (username == null){
            var newName = prompt('Please set your username');
            user.updateProfile({
                displayName: newName
            });
        }
        var userRef = dbRoot.ref('users/');
        var messageRef = dbRoot.ref('messages/');
        $('.username').text(username);
        userRef.child(userId).on('child_changed', function (snap) {
            getTheme(snap.child('bg_theme').val());
            chatThemeCheck(snap.child('chat_theme').val());
        });
        userRef.child(userId).on('child_added', function (snap) {
            getTheme(snap.child('bg_theme').val());
            chatThemeCheck(snap.child('chat_theme').val());
        });
        $('.bg_theme-group button').on('click', function () {
            var toggleThis = 'bg-' + $(this)[0].id.replace('theme_', '');
            userRef.child(userId).child('settings').update({
                bg_theme: toggleThis
            });
        });
        $('.chat_theme-group button').on('click', function(){
            var toggleThis = $(this).text().toLowerCase() + "-theme";
            userRef.child(userId).child('settings').update({
                chat_theme: toggleThis
            });
        });
        $('#send_message').on('click', function(){
            var text = $('#message').val();
            var msgTime = Date.now();
            if (text !== ''){
                messageRef.child(msgTime).set({
                    from: username,
                    msg: text
                }).then(function () {
                    $('#message')[0].value = '';
                })
            }
        });
        var publishMsg = function(data){
            if(data.child('from').val() == username){
                $('#chat_body').append('<p class="float-right" id="' + data.key + '">' + data.child('msg').val() + '<br><br><span class="text-muted"> You (' + userTimeStamp(data.key) + ')</span></p>');
            } else {
                $('#chat_body').append('<p class="float-left">' + data.child('msg').val() + '<br><br><span class="text-muted">' + data.child('from').val() + ' (' + userTimeStamp(data.key) + ')</span></p>');
            }
            $('#chat_body p#' + data.key).dblclick(function () {
                $('#message_setting').modal('show');
                $('#message_setting .btn-outline-danger').attr('id', 'delete_' + data.key);
                $('#delete_' + data.key).on('click', function () {
                    messageRef.child(data.key).remove();
                    $('p#' + data.key).remove()
                })
            })
        }
        messageRef.on('child_added', function(snap){
            publishMsg(snap);
        });
        $('#clear_chat').on('click', function(){
            messageRef.remove();
            $('#chat_body p').remove()
        });
        $('#logout').on('click', function(){
            authRoot.signOut().then(function(){
                $('main').remove();
                window.location.reload()
            })
        })
    } else {
        authenticate();
    }
});