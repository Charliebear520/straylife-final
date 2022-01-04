$(document).ready(function() {
    // REGISTER DOM ELEMENTS
    const $title = $('#title');
    const $doc = $("#doc");
    // INITIALIZE FIREBASE
    firebase.initializeApp({
        apiKey: "AIzaSyCeeabhAGKdC7Oi_qfspSLeKoOIPVeSxBg",
        authDomain: "sl-login-66f5a.firebaseapp.com",
        projectId: "sl-login-66f5a",
        storageBucket: "sl-login-66f5a.appspot.com",
        messagingSenderId: "911638476555",
        appId: "1:911638476555:web:c79cf56399210860f6540e",
        measurementId: "G-0H4WCBN2CH"

    });
    console.log("84");
    // REFERENCE CHATROOM DOCUMENT
    let db = firebase.firestore()
        .collection("user")
        .doc("form1");
    // REFERENCE CHATROOM MESSAGES
    let messagesCollectionRef = db.collection("form2");
    // QUERY MESSAGES BY TIMESTAMP ORDERING 


    // REGISTER DOM ELEMENTS
    console.log("85");
    const $password = $('#password');
    const $email = $('#email');

    console.log("86");
    // LISTEN FOR KEYPRESS EVENT
    $("#sign-up").click(function(e) {
        //FIELD VALUES
        let password = $password.val();
        let email = $email.val();

        //SAVE DATA TO FIREBASE
        messagesCollectionRef.add({

            password: password,
            email: email,

        })

        console.log("87");
        alert("送出成功");



        // $email.val('');

    });
});