const shell = new ActiveXObject("WScript.Shell");

const message: string = "CUSTOM TEXT"; // MESSAGE
const title: string = "Hello World";   // TITLE
const time: number = 0;                 // TIME TO DON'T CLOSE SCREEN

const type: number = 48 + 0; // BUTTON AND ICON

shell.Popup(message, time, title, type); // START ALL COMMANDS