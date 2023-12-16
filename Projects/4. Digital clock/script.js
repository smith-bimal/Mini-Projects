const clock = () => {

    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let today = date.getDay();
    let dates = date.getDate();
    let month = "";
    let year = date.getFullYear();
    let dayName = null;


    let hour_12 = hour % 12;

    function ampm() {
        if (hour >= 12) {
            document.getElementsByClassName("ampm")[0].innerHTML = "(PM)";
        }
        else if (hour == 24 || hour == 00) {
            document.getElementsByClassName("ampm")[0].innerHTML = "(AM)";
        }
        else {
            document.getElementsByClassName("ampm")[0].innerHTML = "(AM)";
        }
    }

    function actualTime() {

        function dualDigit(x) {
            let dual = "0";

            if (x < 10) {
                dual = "0" + x;
            } else {
                dual = x.toString();
            }

            return dual;
        }

        let formattedHour = dualDigit(hour_12);
        let formattedMinute = dualDigit(minute);
        let formattedSeconds = dualDigit(seconds);

        document.getElementById("hour").innerHTML = dualDigit(hour_12);
        document.getElementById("minute").innerHTML = dualDigit(minute);
        document.getElementsByClassName("secbox")[0].innerHTML = dualDigit(seconds);
    }

    function actualDate() {
        document.getElementsByClassName("date")[0].innerHTML = dates + " ,";
        document.getElementsByClassName("year")[0].innerHTML = year;

        switch (date.getMonth()) {
            case 0:
                month = "JANUARY";
            case 1:
                month = "FEBRUARY";
            case 2:
                month = "MARCH";
            case 3:
                month = "APRIL";
            case 4:
                month = "MAY";
            case 5:
                month = "JUNE";
            case 6:
                month = "JULY";
            case 7:
                month = "AUGUST";
            case 8:
                month = "SEPTEMBER";
            case 9:
                month = "OCTOBER";
            case 10:
                month = "NOVEMBER";
            case 11:
                month = "DECEMBER";
        }

        document.getElementsByClassName("month")[0].innerHTML = month;
    }

    function actualDay() {
        switch (today) {
            case 0:
                dayName = "SUN";
            case 1:
                dayName = "MON";
            case 2:
                dayName = "TUES";
            case 3:
                dayName = "WEDNES";
            case 4:
                dayName = "THURS";
            case 5:
                dayName = "FRI";
            case 6:
                dayName = "SATUR";
        }

        document.getElementsByClassName("day1")[0].innerHTML = dayName;
    }

    ampm();
    actualTime();
    actualDate();
    actualDay();
}
clock();
setInterval(clock, 1000);