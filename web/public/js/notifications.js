function getNotificationDiv(type, text) {
    var tempTimeClass = getTimeString()  + getRandomInt(0, 100).toString();
    var info =
        "<div class='notification " + type + " " + tempTimeClass + "'>" +
            "<div class='close-notification' onclick='$(this).parent().removeDOMSlowly(1000)' >×</div>" +
            "<div class='content-notification'>" + text + "</div>" +
        "</div>";
    return [info, tempTimeClass];
}

function notification(text, type, hide) {
    var temp = getNotificationDiv(type, text);
    var element = temp[0];
    var delClass = temp[1];
    $('#notifications').append(element);
    $('.' + delClass).showSlowly(500, function(){
        $('.notification').filter(function(){ return $(this).offset().top < 400; }).removeDOMSlowly(200);
    });
    if (hide === undefined) setTimeout(function(){$('.' + delClass).removeDOMSlowly(1000)}, 5000);
    else if (hide !== false) {
        setTimeout(function(){$('.' + delClass).removeDOMSlowly(1000)}, hide);
    }
}



function notificationInfo(text, hide) {
    notification(text, 'info', hide);
}
function notificationWarning(text, hide) {
    notification(text, 'warning', hide);
}
function notificationError(text, hide) {
    notification(text, 'error', hide);
}