const clock = () => {

    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let today = date.getDay();
    let dates = date.getDate();
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
        let actualMonth = date.getMonth();
        document.getElementsByClassName("year")[0].innerHTML = year;

        switch (actualMonth) {
            case 0:
                document.querySelector(".month").innerHTML = "JANUARY";
                break;
            case 1:
                document.querySelector(".month").innerHTML = "FEBRUARY";
                break;
            case 2:
                document.querySelector(".month").innerHTML = "MARCH";
                break;
            case 3:
                document.querySelector(".month").innerHTML = "APRIL";
                break;
            case 4:
                document.querySelector(".month").innerHTML = "MAY";
                break;
                break;
            case 5:
                document.querySelector(".month").innerHTML = "JUNE";
                break;
            case 6:
                document.querySelector(".month").innerHTML = "JULY";
                break;
            case 7:
                document.querySelector(".month").innerHTML = "AUGUST";
                break;
            case 8:
                document.querySelector(".month").innerHTML = "SEPTEMBER";
                break;
            case 9:
                document.querySelector(".month").innerHTML = "OCTOBER";
                break;
            case 10:
                document.querySelector(".month").innerHTML = "NOVEMBER";
                break;
            case 11:
                document.querySelector(".month").innerHTML = "DECEMBER";
                break;
        }
    }

    function actualDay() {
        switch (today) {
            case 0:
                dayName = "SUN";
                break;
            case 1:
                dayName = "MON";
                break;
            case 2:
                dayName = "TUES";
                break;
            case 3:
                dayName = "WEDNES";
                break;
            case 4:
                dayName = "THURS";
                break;
            case 5:
                dayName = "FRI";
                break;
            case 6:
                dayName = "SATUR";
                break;
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