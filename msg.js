var shell = new ActiveXObject("WScript.Shell");

var message = "CUSTOM TEXT"; //MESSAGE
var title = "Hello World";   //TITLE
var time = 0;                //TIME TO DON'T CLOSE SCREEN

var type = 48 + 0; //BUTTON AND ICON

shell.Popup(message, time, title, type); //START ALL COMANDS