setInterval(() => {
    time = moment().format("dddd, MMMM YYYY H:mm:ss");
    $("#time_clock").text(time);
    
},1000);