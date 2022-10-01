var password = document.getElementById("password");
function genPassword(){
var char = 
            " 0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var passwordLength = 15;
            var password = "";
            for(var i=0 ; i<= passwordLength; i++){
                var randomNumber = Math.floor(Math.random() * char.length);
                password += char.substring(randomNumber, randomNumber +1);
               
            }
            document.getElementById("password").value = password;
}
function copyPassword(){
    var copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0, 99);
        document.execCommand("copy");

}