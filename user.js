(function(){
    const authRoot = firebase.auth();
    const dbRoot = firebase.database();
    authRoot.onAuthStateChanged(function (user) {
        if (user) {
            var userId = user.uid;
            var username = user.displayName;
            var userRef = dbRoot.ref('users/');
            $('.username').text(username);
            userRef.on('child_changed', function(snap){
                getTheme(snap.child('theme').val());
            });
            userRef.on('child_added', function(snap){
                getTheme(snap.child('theme').val());
            });
            $('.theme-group button').on('click', function(){
                var toggleThis = 'bg-' + $(this)[0].id.replace('theme_', '');
                userRef.child(userId).update({theme: toggleThis});
            })
        } else {
            console.log('No user')
        }
    });
}())