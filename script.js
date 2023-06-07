

setInterval(() => {
    const spantime = document.getElementById('time');
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";

    if(hour == 0){
        hour = 12; //12 hr format
    }
    if(hour > 12){
        hour=hour-12;
        session = "PM";
    }

    hour = (hour<10)? "0"+hour:hour;
    min = (min<10)? "0"+min:min;
    sec = (sec<10)? "0"+sec:sec;


    spantime.innerHTML = hour+ ":" + min +  ":" + sec + session;

}, 1000);

