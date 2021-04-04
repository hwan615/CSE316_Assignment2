document.addEventListener('DOMContentLoaded', function() {

    function addDate() {
        if (date == today) {
            alert("You can't move to the heading day");
        }
        else {
            top.removeChild(document.getElementById("calendar"));
            addTime = incrementDate(date, 1);
            addTime = addTime.toLocaleDateString('en-US');
            day = document.createElement('div');
            day.append(addTime);
            day.className = "cal";
            day.id = "calendar";
            top.insertBefore(day, top.lastElementChild);
            rButton.addEventListener('click', addDate);
            date = addTime;
        }
    }
    function subDate() {
            top.removeChild(document.getElementById("calendar"));
            addTime = substractDate(date, 1);
            addTime = addTime.toLocaleDateString('en-US');
            day = document.createElement('div');
            day.append(addTime);
            day.className = "cal";
            day.id = "calendar";
            top.insertBefore(day, top.lastElementChild);
            rButton.addEventListener('click', addDate);
            date = addTime;
    }

    function incrementDate(dateInput,increment) {
        var dateFormatTotime = new Date(dateInput);
        var increasedDate = new Date(dateFormatTotime.getTime() +(increment *86400000));
        return increasedDate;
    }
    function substractDate(dateInput,substract) {
        var dateFormatTotime = new Date(dateInput);
        var increasedDate = new Date(dateFormatTotime.getTime() -(substract *86400000));
        return increasedDate;
    }
    var x = new Date();
    var date = x.toLocaleDateString('en-US');
    const today = new Date().toLocaleDateString('en-US');
    date.className = "date"
    var day = document.createElement('div');
    day.append(date);
    day.className = "cal";
    day.id = "calendar";
    var top = document.getElementById("boxtop");
    top.insertBefore(day, top.lastElementChild);
    var addTime = 0;

    var rButton = document.getElementById("right");
    var lButton = document.getElementById("left");
    
    rButton.addEventListener('click', addDate);
    lButton.addEventListener('click', subDate);
}, false);