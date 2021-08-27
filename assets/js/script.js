$("#currentDay").text(moment().format("llll"));
function dateTime() {
    var currentHours = moment().hours();

    $(".time-block").each(function () {
        var hourEl = $(this).attr("id");
        var hourDay = hourEl.substring(5, hourEl.length);
        var intHourDay = parseInt(hourDay)
        var intCurrentHours = parseInt(currentHours);
        if (parseInt(intHourDay) < parseInt(intCurrentHours)) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (parseInt(intHourDay) > parseInt(intCurrentHours)) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
        else if (parseInt(intHourDay) === parseInt(intCurrentHours)) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
    })
};
dateTime();