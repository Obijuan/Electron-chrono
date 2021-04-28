console.log("Renderer js...");

//-- Get the UI elements
const but_start = document.getElementById('but_start');
const but_reset = document.getElementById('but_reset');
const disp_time = document.getElementById('disp_time');

//-- Chornometer state
const CHRONO_STATE = {
    STOP: 0,
    START: 1
}

//-- Initial state
let state = CHRONO_STATE.STOP;

//-- Timer ID
let timmer_id = null;

//-- Current time
let tenths = 0;
let sec = 0;
let min = 0;

//-- Callback function executed every 10ms
function increase_chrono()
{

  //-- Update thents
  tenths = (tenths + 1) % 100;

  if (tenths == 0) {
    sec = (sec + 1) % 60;

    if (sec == 0) {
        min = (min + 1) % 60;
    }
  }

  //-- Get the time as a two digit string
  let tenths_str = String(tenths).length == 1 ? "0" + String(tenths) : tenths; 
  let sec_str = String(sec).length == 1 ? "0" + String(sec) : sec;
  let min_str = String(min).length == 1 ? "0" + String(min) : min;

  //-- Show the current time
  disp_time.innerHTML = min_str + ":" + sec_str + "." + tenths_str;
}

//-- Start/stop button pressed
but_start.onclick = () => {

    if (state == CHRONO_STATE.STOP) {
        //-- The Chrono was stopped: start it
        timmer_id = setInterval(increase_chrono, 10);
        state = CHRONO_STATE.START;

    } else {
        //-- The Chrono is working... stop it
        clearInterval(timmer_id);
        state = CHRONO_STATE.STOP;
    }
}

//-- Reset button pressed
but_reset.onclick = () => {
    tenths = 0;
    sec = 0;
    min = 0;
    disp_time.innerHTML = "00:00.00";
}
