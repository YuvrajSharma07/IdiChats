(function(){
    const authRoot = firebase.auth();
    const dbRoot = firebase.database();
    authRoot.onAuthStateChanged(function (user) {
        if (user) {
            var userId = user.uid;
            var userRef = dbRoot.ref(userId);
        }
    });
}())