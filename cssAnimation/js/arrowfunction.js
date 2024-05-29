const user = {
    username : "Steve",
    price : 999,

    welcomeMessage : function ( ) {
        console.log( `${this.username} , welcome to website ` ); // current conext
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // orignal username chnaged to sam

// console.log(this); // you get empty object

function chai() {
    
    console.log(this);
}

chai()