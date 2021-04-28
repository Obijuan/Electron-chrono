const { BrowserWindow } = require('electron');
const electron = require('electron');

//-- Main GUI window
let win = null;

console.log("Launching the App....");

//-- Wait until the Electron app is ready
electron.app.once('ready', () => {

  //-- Create the main window
  win = new BrowserWindow({
    //-- Initial window size
    width: 300,
    height: 140,
    //resizable: false,

    backgroundColor: "#111",

    //-- Window tittle
    title: "Electro-Chrono"
  });

  //-- Default menu not shown
  win.setMenuBarVisibility(false); 

  //-- Load the GUI web page
  win.loadFile('index.html');

});

